import {View} from "react-native";
import React, {useEffect, useState} from "react";
import {Calendar} from "react-native-calendars";
import {useDispatch, useSelector} from "react-redux";
import {getUpcomingMoviesRequestAction} from "../movies/actions";

export const CalendarComponent = ({navigation: { navigate }}) => {
    const dispatch = useDispatch();
    const [currentData,setCurrentData] = useState('')
    const [nextMonthData,setNextMonthData] = useState('')
    const {listCalendarFilms} = useSelector(store=>store.rootMovies)

    const [selected, setSelected] = useState('');

    const onDayPress = (day) => {
        setSelected(day.dateString);
        let includeFilms = listCalendarFilms.filter(el=>{
            if(el.release_date===day.dateString){
                return el
            }
        })
        includeFilms.length!==0 && navigate('DayInfo',{day:day.dateString})
    };

    const getCurrentMonth = () => {
        const date = new Date();
        return date.toISOString().split('T')[0];
    }

    const getNextMonthDate = prevDate => {
        let isNewYear = false
        let arrayDate = prevDate.split('-');
        let newArrayDate = arrayDate.map((el,index)=>{
            if(index===1){
                if(el===12) {
                    return '01'
                } else {
                    el=+el+1
                    if (el<10){
                        el=`0${el}`
                       return el
                    }else return (+el+1).toString();
                }
            }else return el
        })
        newArrayDate = newArrayDate.reverse().map((el,index)=>{
            if (index===1) {
                if(el==='13'){
                    isNewYear = true
                    el='01'
                    return el
                }else {
                    isNewYear = false;
                    return el
                }

            }else if (index===2){
                if(isNewYear){
                    el=+el+1
                    return el
                }else return el
            }else return el
        })
        return newArrayDate.reverse().join('-')
    }

    useEffect(()=>{
        let date = getCurrentMonth();
        setCurrentData(date)
        let nextMonthDate = getNextMonthDate(date);
        setNextMonthData(nextMonthDate)
    },[])

    useEffect(()=>{
        currentData!=='' && nextMonthData!=='' && dispatch(getUpcomingMoviesRequestAction({currentData,nextMonthData}))
    },[currentData,nextMonthData]);

    const fillObj = selected => {
        let arrayDates = listCalendarFilms.map(el=>el.release_date)
        let objectMarkers = {}
        objectMarkers[selected] = {selected: true, selectedColor: 'blue'}
        arrayDates.forEach(el=>objectMarkers[el] = {marked: true})
        return objectMarkers
    }

    const changeMonthHandler = month => {
        if(month.dateString>currentData){
            let currentDate = month.dateString;
            setCurrentData(currentDate)
            let nextDate = getNextMonthDate(currentDate)
            setNextMonthData(nextDate)
        }
    }

    return(
        <View style={{flex:1}}>
            <Calendar
                enableSwipeMonths={true}
                current={selected}
                hideArrows={false}
                markedDates={fillObj(selected)}
                onMonthChange={changeMonthHandler}
                onDayPress={onDayPress}
                style={()=>{}}
            />
            
        </View>
    )
}
