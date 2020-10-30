import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPopularMoviesRequestAction} from "./actions";
import {Movies} from "./component";


export const MoviesContainer = ({navigation}) => {
    const dispatch = useDispatch();
    const {popularFilms} = useSelector(state => state.rootMovies)
    let [page,setPage] = useState(1)

    useEffect(() => {
        dispatch(getPopularMoviesRequestAction({page}))
    }, [])

    const loadDinamicData = () => {
        setPage(++page);
        dispatch(getPopularMoviesRequestAction({page}))
    }

    return (
        <Movies navigation={navigation} movies={popularFilms} loadDinamicData={loadDinamicData}/>
    )
}
