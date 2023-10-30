// cards.route.js

const express = require('express');
const auth = require('../../middlewares/auth');
const cardController = require('../../controllers/card.controller');

const router = express.Router();

router
  .route('/')
  .get(cardController.getCards); // Only users with the 'getCards' permission can access this route

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Cards
 *   description: Card retrieval
 */

/**
 * @swagger
 * /cards:
 *   get:
 *     summary: Get all cards
 *     description: Retrieve all cards.
 *     tags: [Cards]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Card'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
