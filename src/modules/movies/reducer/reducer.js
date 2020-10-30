let initialState = {
    popularFilms: [],
    searchedFilms: [],
    allFilms: [],
    topFilms: [],
    filteredFilms: [],
    currentFilm: {}
}

export const reducerFilms = (state = initialState ,action) => {
    switch (action.type){
        case 'GET__POPULAR__MOVIES__SUCCESS' : return {
            ...state,
            popularFilms: [...state.popularFilms,...action.popularFiLms]
        }
        case 'GET__SEARCHED__MOVIES__SUCCESS' : return {
            ...state,
            searchedFilms: [...state.searchedFilms,...action.searchedFilms]
        }
        case 'RESET__SEARCHED__MOVIES__REQUEST' : return {
            ...state,
            searchedFilms: []
        }
        case 'RESET__SEARCHED__MOVIES__BEFORE__INPUT__REQUEST' : return {
            ...state,
            searchedFilms: []
        }
        case 'GET__ALL__MOVIES__SUCCESS' : return {
            ...state,
            allFilms: [...state.allFilms,...action.allFilms]
        }
        case 'GET__TOP__MOVIES__SUCCESS' : return {
            ...state,
            topFilms: [...state.topFilms,...action.topFilms]
        }
        case 'GET__FILTERED__MOVIES__SUCCESS' : return {
            ...state,
            filteredFilms: [...state.filteredFilms,...action.filteredFilms]
        }
        case 'GET__CURRENT__MOVIE__SUCCESS' : return {
            ...state,
            currentFilm: action.currentFilm
        }
        case 'RESET__FILTERED__MOVIES__REQUEST' : return {
            ...state,
            filteredFilms: []
        }
        default : return state
    }
}
