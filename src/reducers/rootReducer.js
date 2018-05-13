import {combineReducers} from 'redux';
import movie from './movieReducer';

const rootReducer = combineReducers({
    movie
});

export default rootReducer;