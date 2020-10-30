import {Alert} from "react-native";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilteredMoviesRequestAction, resetFilteredMoviesRequestAction} from "../movies/actions";
import {separateString} from "../../utils";
import {PickerComponent} from "./component/pickerComponent";


export const PickerComponentContainer = ({getFilterData,arr,toggleOverlay}) => {
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [language, setLanguage] = useState('');
    const [vote, setVote] = useState('');
    const [page, setPage] = useState(1);
    const {filteredFilms} = useSelector(store=>store.rootMovies)

    const dispatch = useDispatch();

    const setValues = (value,index) => {
        switch (index){
            case 0 : setGenre(value); break;
            case 1 : setYear(value); break;
            case 2 : setLanguage(value); break;
            case 3 : setVote(value); break;
            default : null
        }
    }

    const filterHandler = () => {
        filteredFilms.length!==0 && dispatch(resetFilteredMoviesRequestAction())
        let arrayDate = separateString(year);
        let arrayVote = separateString(vote);
        getFilterData({genre,arrayDate,language,arrayVote,page})
        if (genre===''|| arrayDate===''||arrayVote===''||language===''){
            Alert.alert('Input data')
        }else {
            dispatch(getFilteredMoviesRequestAction({page,genre,arrayDate,arrayVote,language}));
            toggleOverlay()
        }
    }

    return(
        <PickerComponent arr={arr} filterHandler={filterHandler} setValues={setValues} toggleOverlay={toggleOverlay}/>
    )
}
