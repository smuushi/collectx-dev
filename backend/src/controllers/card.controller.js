const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { cardService } = require('../services');

// Create a card
const createCard = catchAsync(async (req, res) => {
  const card = await cardService.createCard(req.body);
  res.status(httpStatus.CREATED).send(card);
});

// Get all cards
const getCards = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']); // Example: You can modify based on your card attributes
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await cardService.queryCards(filter, options);
  res.send(result);
});

// Get a card by ID
const getCard = catchAsync(async (req, res) => {
  const card = await cardService.getCardById(req.params.cardId);
  if (!card) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Card not found');
  }
  res.send(card);
});

// Update a card by ID
const updateCard = catchAsync(async (req, res) => {
  const card = await cardService.updateCardById(req.params.cardId, req.body);
  res.send(card);
});

// Delete a card by ID
const deleteCard = catchAsync(async (req, res) => {
  await cardService.deleteCardById(req.params.cardId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCard,
  getCards,
  getCard,
  updateCard,
  deleteCard,
};
