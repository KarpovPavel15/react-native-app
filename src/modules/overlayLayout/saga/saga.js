import {all, call, put, takeEvery} from "@redux-saga/core/effects";
import {fetchGenres, fetchLanguages} from "../../../api";
import {getGenresForSearchSuccessAction, getLanguagesForSearchSuccessAction} from "../actions";


function* getLanguagesFilterSaga(){
    const languages = yield call(fetchLanguages);
    const languagesList = languages.data;
    yield put(getLanguagesForSearchSuccessAction({languages:[...languagesList]}))
}

function* getGenresFilterSaga(){
    const genres = yield call(fetchGenres);
    const genresList = genres.data.genres;
    yield put(getGenresForSearchSuccessAction({genres:[...genresList]}))
}

export function* sagaFilter(){
    yield all ([
        takeEvery('GET__LANGUAGES__FILTER__REQUEST', getLanguagesFilterSaga),
        takeEvery('GET__GENRES__FILTER__REQUEST', getGenresFilterSaga),
    ])
}
