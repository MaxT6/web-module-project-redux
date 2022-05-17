import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (movieState = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...movieState,
                movies: movieState.movies.filter(item=>(action.payload !== item.id))
            }
        default:
            return movieState;
    }
}

export default reducer;