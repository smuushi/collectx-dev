// reducers/cardsReducer.js
const initialState = {};

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARDS':
            const newCardsState = {};

            action.payload.results.forEach(card => {
                newCardsState[card._id] = card;
            });
            return newCardsState;
        case 'UPDATE_CARD':
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        // ... add more cases as needed
        default:
            return state;
    }
};

export default cardsReducer;
