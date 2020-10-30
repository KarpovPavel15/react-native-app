import {actionCreator, requestCreator, successCreator} from "../../../utils";

export const getLanguagesForSearch = 'GET__LANGUAGES__FILTER'
export const getLanguagesForSearchRequestAction = actionCreator(requestCreator(getLanguagesForSearch));
export const getLanguagesForSearchSuccessAction = actionCreator(successCreator(getLanguagesForSearch));

export const getGenresForSearch = 'GET__GENRES__FILTER'
export const getGenresForSearchRequestAction = actionCreator(requestCreator(getGenresForSearch));
export const getGenresForSearchSuccessAction = actionCreator(successCreator(getGenresForSearch));
