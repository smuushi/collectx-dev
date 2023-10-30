const httpStatus = require('http-status');
const { Card } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a card
 * @param {Object} cardBody
 * @returns {Promise<Card>}
 */
const createCard = async (cardBody) => {
  return Card.create(cardBody);
};

/**
 * Query for cards
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCards = async (filter) => {
  const cards = await Card.find(filter);
  return { results: cards, total: cards.length };
};

/**
 * Get card by id
 * @param {ObjectId} id
 * @returns {Promise<Card>}
 */
const getCardById = async (id) => {
  return Card.findById(id);
};

/**
 * Update card by id
 * @param {ObjectId} cardId
 * @param {Object} updateBody
 * @returns {Promise<Card>}
 */
const updateCardById = async (cardId, updateBody) => {
  const card = await getCardById(cardId);
  if (!card) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Card not found');
  }
  Object.assign(card, updateBody);
  await card.save();
  return card;
};

/**
 * Delete card by id
 * @param {ObjectId} cardId
 * @returns {Promise<Card>}
 */
const deleteCardById = async (cardId) => {
  const card = await getCardById(cardId);
  if (!card) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Card not found');
  }
  await card.remove();
  return card;
};

module.exports = {
  createCard,
  queryCards,
  getCardById,
  updateCardById,
  deleteCardById,
};
