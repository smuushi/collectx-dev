// actions/cardActions.js
export const fetchCards = () => async (dispatch) => {
    try {
        // Assuming that fetching cards is a GET request without a body
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/cards`); 

        const data = await response.json();
        if (response.status === 200) {
            dispatch({
                type: 'SET_CARDS',
                payload: data,
            });
            return data;
        } else {
            throw new Error('Failed to fetch cards');
        }
    } catch (error) {
        // Here, I'm assuming a new action type 'FETCH_CARDS_FAILURE'
        // You can modify based on your needs
        dispatch({
            type: 'FETCH_CARDS_FAILURE',
            payload: error.message,
        });
    }
};
