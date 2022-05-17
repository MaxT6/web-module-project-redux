import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database",
}

const movieReducer = (movieState = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...movieState,
                movies: movieState.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
          const newMovie = { 
            ...action.payload,
            id: Date.now()
          }
          return{
            ...movieState,
            movies:[...movieState.movies, newMovie]
          }
        default:
            return movieState;
    }
}

export default movieReducer;