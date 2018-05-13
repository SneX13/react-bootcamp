import  * as types from '../actions/actionTypes';

function addMovie(movie){
    return {
        type: types.ADD_MOVIE,
        movie //validation should be added to check if it as object or expected data type
    }
}
