import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilteredMoviesRequestAction, getTopRatedMoviesRequestAction} from "../movies/actions";
import {CollectionsPage} from "./components/collectionsPage";
import {useRoute} from "@react-navigation/native";

export const CollectionsPageContainer = ({navigation}) => {
    const {topFilms,filteredFilms} = useSelector(store=>store.rootMovies)
    let [page,setPage] = useState(1)
    let [dataFilter,setDataFilter] = useState({})
    const dispath = useDispatch();

    const getFilterData = data => setDataFilter(data)

    const loadDinamicAllData = () => {
        setPage(++page);
        dispath(getTopRatedMoviesRequestAction({page}))
    }

    const loadFilterData = () => {
        let page =++dataFilter.page;
        let genre = +dataFilter.genre;
        let arrayVote = dataFilter.arrayVote;
        let arrayDate = dataFilter.arrayDate;
        let language = dataFilter.language;
        dispath(getFilteredMoviesRequestAction({page,genre,arrayVote,arrayDate,language}))
    }

    useEffect(()=>{
        dispath(getTopRatedMoviesRequestAction({page}))
    },[])

    return(
        <CollectionsPage navigation={navigation} topFilms={topFilms} filteredFilms={filteredFilms} getFilterData={getFilterData} loadDinamicAllData={loadDinamicAllData} loadFilterData={loadFilterData}/>
    )
}
