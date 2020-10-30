import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllMoviesRequestAction,
    getSearchedMoviesRequestAction, resetSearchedMoviesBeforeInputRequestAction,
    resetSearchedMoviesRequestAction
} from "../movies/actions";
import {SearchPage} from "./component";

export const SearchPageContainer = ({navigation}) => {
    const [text, setText] = useState('');
    let [page,setPage] = useState(1)
    let [pageSearch,setPageSearch] = useState(1)
    const dispatch = useDispatch();
    const {searchedFilms, allFilms} = useSelector(store => store.rootMovies)

    const getTextInput = text => setText(text)
    const clearTextInputRequest = () => dispatch(resetSearchedMoviesRequestAction())

    useEffect(() => {
        text !== "" && dispatch(resetSearchedMoviesBeforeInputRequestAction()) && dispatch(getSearchedMoviesRequestAction({text: text,pageSearch:pageSearch}))
        text === "" && dispatch(getAllMoviesRequestAction({page}))
    }, [text])

    const loadDinamicAllData = () => {
        setPage(++page);
        dispatch(getAllMoviesRequestAction({page}))
    }
    const loadDinamicSearchData = () => {
        setPageSearch(++pageSearch);
        dispatch(getSearchedMoviesRequestAction({pageSearch,text}))
    }

    return (
        <SearchPage navigation={navigation} loadDinamicSearchData={loadDinamicSearchData} loadDinamicAllData={loadDinamicAllData} allFilms={allFilms} clearTextInputRequest={clearTextInputRequest} text={text}
                    searchedFilms={searchedFilms} getTextInput={getTextInput}/>
    )
}
