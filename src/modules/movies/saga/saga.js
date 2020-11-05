import {all, call, put, takeEvery} from "@redux-saga/core/effects";
import {
    fetchAllFilms, fetchCalendarDates,
    fetchCurrentFilm, fetchCurrentTrailer,
    fetchFilteredFilms,
    fetchPopularFilms,
    fetchSearchingFilms,
    fetchTopFilms
} from "../../../api";
import {
    getAllMoviesSuccessAction,
    getCurrentMovieSuccessAction,
    getCurrentMovieTrailerSuccessAction,
    getFilteredMoviesSuccessAction,
    getPopularMoviesSuccessAction,
    getSearchedMoviesSuccessAction,
    getTopRatedMoviesSuccessAction, getUpcomingMoviesSuccessAction,
} from "../actions";

function* getMoviesSaga({page}){
    const popularFilms = yield call(fetchPopularFilms,page);
    const movie = popularFilms.data.results;
    yield put(getPopularMoviesSuccessAction({popularFiLms:[...movie]}))
}

function* getSearchedMoviesSaga( {text,pageSearch} ){
    const searchedFilms = yield call(fetchSearchingFilms, [text],[pageSearch]);
    const movie = searchedFilms.data.results;
    yield put(getSearchedMoviesSuccessAction({searchedFilms:[...movie]}))
}

function* getAllMoviesSaga({page}){
    const allFilms = yield call(fetchAllFilms,page);
    const movie = allFilms.data.results;
    yield put(getAllMoviesSuccessAction({allFilms:[...movie]}))
}

function* getTopMoviesSaga({page}){
    const topFilms = yield call(fetchTopFilms,page);
    const movie = topFilms.data.results;
    yield put(getTopRatedMoviesSuccessAction({topFilms:[...movie]}))
}

function* getFilteredMoviesSaga({page,genre,arrayDate,arrayVote,language}){
    const filteredFilms = yield call(fetchFilteredFilms,{page,genre,arrayDate,arrayVote,language});
    const movie = filteredFilms.data.results;
    yield put(getFilteredMoviesSuccessAction({filteredFilms:[...movie]}))
}

function* getCurrentMovieSaga({idMovie}){
    const currentFilm = yield call(fetchCurrentFilm,idMovie);
    const movie = currentFilm.data;
    yield put(getCurrentMovieSuccessAction({currentFilm:movie}))
}

function* getCurrentMovieTrailerSaga({id}){
    const currentFilmTrailer = yield call(fetchCurrentTrailer,id);
    const trailerKey = currentFilmTrailer.data.results;
    yield put(getCurrentMovieTrailerSuccessAction({currentFilmTrailer:[...trailerKey]}))
}

function* getUpcomingMoviesSaga({currentData,nextMonthData}){
    const listCalendarFilms = yield call(fetchCalendarDates,currentData,nextMonthData);
    const filmsForCalendar = listCalendarFilms.data.results;
    yield put(getUpcomingMoviesSuccessAction({listCalendarFilms:[...filmsForCalendar]}))
}

export function* sagaMovies(){
    yield all ([
        takeEvery('GET__POPULAR__MOVIES__REQUEST', getMoviesSaga),
        takeEvery('GET__SEARCHED__MOVIES__REQUEST', getSearchedMoviesSaga),
        takeEvery('GET__ALL__MOVIES__REQUEST', getAllMoviesSaga),
        takeEvery('GET__TOP__MOVIES__REQUEST', getTopMoviesSaga),
        takeEvery('GET__FILTERED__MOVIES__REQUEST', getFilteredMoviesSaga),
        takeEvery('GET__CURRENT__MOVIE__REQUEST', getCurrentMovieSaga),
        takeEvery('GET__CURRENT__MOVIE__TRAILER__REQUEST', getCurrentMovieTrailerSaga),
        takeEvery('GET__UPCOMING__MOVIES__REQUEST', getUpcomingMoviesSaga),
    ])
}
