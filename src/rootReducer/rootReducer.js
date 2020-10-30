import {combineReducers} from "redux";
import {reducerFilms} from "../modules/movies/reducer";
import {reducerFilter} from "../modules/overlayLayout/reducer";

export default combineReducers({
    rootMovies: reducerFilms,
    filterOptions: reducerFilter
})
