import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGenresForSearchRequestAction, getLanguagesForSearchRequestAction} from "./actions";
import {OverlayLayout} from "./component";

export const OverlayLayoutContainer = ({getFilterData}) => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const {languages,genres} = useSelector(state=>state.filterOptions)

    const toggleOverlay = () => setVisible(!visible);

    useEffect(()=>{
        dispatch(getLanguagesForSearchRequestAction())
        dispatch(getGenresForSearchRequestAction())
    },[])

    const list = [
        {
            label: 'Genre',
            value: genres
        },
        {
            label: 'Years',
            value: ['1910-1920', '1920-1930', '1930-1940', '1940-1950', '1950-1960', '1960-1970', '1970-1980',
                '1980-1990', '1990-2000', '2000-2010', '2010-2020'
            ]
        },
        {
            label: 'Language',
            value: languages
        },
        {
            label: 'Vote',
            value: ['0-1','1-2','3-4','4-5','6-7','8-9','9-10']
        }
    ]


    return (
        <OverlayLayout getFilterData={getFilterData} list={list} toggleOverlay={toggleOverlay} visible={visible}/>
    );
};
