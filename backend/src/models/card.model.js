const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    }
});

const tagSchema = mongoose.Schema({
    Category: {
        type: String,
        required: true
    },
    Set: {
        type: String,
        required: true
    },
    Number: String,
    Year: String,
    Grader: String,
    Serial: String,
    Grade: String,
    Subject: String
});

const detailsSchema = mongoose.Schema({
    standard: {
        type: String,
        required: false
    },
    chain: {
        type: String,
        required: false
    },
    contact_address: {
        type: String,
        required: false
    },
    token_id: {
        type: String,
        required: false
    }
});

const cardSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        tag: tagSchema,
        details: detailsSchema,
        img: [imageSchema]
    },
    {
        timestamps: true
    }
);

const Card = mongoose.model('Card', cardSchema, "cards");

module.exports = Card;
