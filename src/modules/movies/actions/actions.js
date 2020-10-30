import {actionCreator, requestCreator, successCreator} from "../../../utils";


export const getPopularMovies = 'GET__POPULAR__MOVIES';
export const getPopularMoviesRequestAction = actionCreator(requestCreator(getPopularMovies));
export const getPopularMoviesSuccessAction = actionCreator(successCreator(getPopularMovies));

export const getSearchedMovies = 'GET__SEARCHED__MOVIES'
export const getSearchedMoviesRequestAction = actionCreator(requestCreator(getSearchedMovies));
export const getSearchedMoviesSuccessAction = actionCreator(successCreator(getSearchedMovies));

export const getAllMovies = 'GET__ALL__MOVIES'
export const getAllMoviesRequestAction = actionCreator(requestCreator(getAllMovies));
export const getAllMoviesSuccessAction = actionCreator(successCreator(getAllMovies));

export const resetSearchedMovies = 'RESET__SEARCHED__MOVIES'
export const resetSearchedMoviesRequestAction = actionCreator(requestCreator(resetSearchedMovies));

export const resetSearchedMoviesBeforeInput = 'RESET__SEARCHED__MOVIES__BEFORE__INPUT'
export const resetSearchedMoviesBeforeInputRequestAction = actionCreator(requestCreator(resetSearchedMoviesBeforeInput));

export const getTopRatedMovies = 'GET__TOP__MOVIES'
export const getTopRatedMoviesRequestAction = actionCreator(requestCreator(getTopRatedMovies));
export const getTopRatedMoviesSuccessAction = actionCreator(successCreator(getTopRatedMovies));

export const getFilteredMovies = 'GET__FILTERED__MOVIES'
export const getFilteredMoviesRequestAction = actionCreator(requestCreator(getFilteredMovies));
export const getFilteredMoviesSuccessAction = actionCreator(successCreator(getFilteredMovies));

export const resetFilteredMovies = 'RESET__FILTERED__MOVIES'
export const resetFilteredMoviesRequestAction = actionCreator(requestCreator(resetFilteredMovies));

export const getCurrentMovie = 'GET__CURRENT__MOVIE';
export const getCurrentMovieRequestAction = actionCreator(requestCreator(getCurrentMovie));
export const getCurrentMovieSuccessAction = actionCreator(successCreator(getCurrentMovie));
