import { combineReducers } from 'redux';
import moviesReducer from '../reducers/moviesReducer';

const rootReducer = combineReducers({
    moviesReducer,
})

export default rootReducer;