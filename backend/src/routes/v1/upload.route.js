const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const config = require('../../config/config');
const auth = require('../../middlewares/auth');
const User = require('../../models/user.model')

AWS.config.update({
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
    region: config.aws.region,
});

const s3 = new AWS.S3();

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // Limit to 5MB
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Not an image! Please upload an image file.'), false);
        }
    }
});

const router = express.Router();

router.post('/:userId/pfp', auth(), upload.single('file'), async (req, res) => {
    try {
        if (req.params.userId !== req.user.id) {
            return res.status(403).send({ error: 'User not authorized.' });
        }

        const file = req.file;
        const sanitizedFileName = encodeURIComponent(file.originalname);

        const params = {
            Bucket: config.s3BucketName,
            Key: `${req.params.userId}/pfp/${Date.now()}-${sanitizedFileName}`,
            Body: file.buffer,
            ContentType: file.mimetype,
        };

        const s3Response = await s3.upload(params).promise();

        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).send({ error: 'User not found.' });
        }

        user.pfp_url = s3Response.Location;
        await user.save();

        res.json({
            message: 'File uploaded successfully',
            user: user
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message || 'Failed to upload file' });
    }
});

module.exports = router;
