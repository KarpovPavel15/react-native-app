let initialState = {
    languages: [],
    genres: []
}

export const reducerFilter = (state = initialState ,action) => {
    switch (action.type){
        case 'GET__LANGUAGES__FILTER__SUCCESS' : return {
            ...state,
            languages: [...state.languages,...action.languages]
        }
        case 'GET__GENRES__FILTER__SUCCESS' : return {
            ...state,
            genres: [...state.genres,...action.genres]
        }
        default : return state
    }
}
