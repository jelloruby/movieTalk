import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from '../reducers/user'
import review from '../reducers/review'

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;

        default: {
            const combinedReducer = combineReducers({
                user,
                review,
            });
            return combinedReducer(state, action);
        }
    }
};

export default rootReducer;
