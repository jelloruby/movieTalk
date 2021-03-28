import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import movie from '../reducers/movie'

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combinedReducer = combineReducers({
                movie
            });
            return combinedReducer(state, action);
        }
    }
};

export default rootReducer;
