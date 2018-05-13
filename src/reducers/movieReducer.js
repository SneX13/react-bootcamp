import initialState from './initialState';
import * as types from '../actions/actionTypes'

function movieReducer(state = initialState.movies, action) {
    switch (action.type) {
        case types.ADD_MOVIE:
            state = state.concat(action.movie); //{...state,} three dots = crate new object with all previous properties and let me define new properties
            return state;
        default:
                return state
    }
}

export default movieReducer;