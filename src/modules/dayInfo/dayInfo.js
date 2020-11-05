import {View} from "react-native";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {MoviesList} from "../../components/moviesList";

export const DayInfo = ({route:{params:{day}},navigation}) => {
    const {listCalendarFilms} = useSelector(store=>store.rootMovies)
    const [dayFilms,setDayFilms] = useState([]);

    const getNeededFilms = (day,listCalendarFilms) => {
        return listCalendarFilms.filter(el => {
            if (el.release_date === day) {
                return el
            }
        })
    }

    useEffect(()=>{
        setDayFilms(getNeededFilms(day,listCalendarFilms))
    },[])

    return(
        <View style={{flex:1}}>
            <MoviesList navigation={navigation} data={dayFilms}/>
        </View>
    )
}
