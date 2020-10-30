import React, {useEffect, useState} from "react";
import {ImageBackground, Text, View,StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentMovieRequestAction} from "../movies/actions";
import {Image} from "react-native-elements";
import {transformData} from "../../utils";

export const MovieInfo = ({route}) => {
    const {params} = route;
    const idMovie = params.id;
    const dispatch = useDispatch();
    const {currentFilm} = useSelector(store=>store.rootMovies)
    let [loading,setLoading]= useState(true);

    const {genres,backdrop_path,original_language,original_title,overview,popularity,poster_path,release_date,vote_average,runtime} = currentFilm;

    useEffect(()=>{
        dispatch(getCurrentMovieRequestAction({idMovie}))
    },[])

    useEffect(()=> {
               if( currentFilm.hasOwnProperty('id') ){
                   setLoading(false);
               }
    },[currentFilm])

    return(
        <View style={{flex:1}}>
            {loading===false && currentFilm.hasOwnProperty('id') &&
            <View style={styles.filmPage}>
                <ImageBackground style={styles.container} source={{uri:`http://image.tmdb.org/t/p/w500/${backdrop_path}`}}>
                    <View>
                        <Image source={{uri:`http://image.tmdb.org/t/p/w300/${poster_path}`}} style={{ width: 100, height: 100 }}/>
                    </View>
                    <View style={styles.text}>
                        <View><Text style={{color:'white',fontSize:20}}>{original_title}</Text></View>
                        <View>
                            <Text style={{color:'white'}} >Genre : {genres && genres.length>0 && genres.map(el=><Text key={`genre-${el.id}`}>{el.name}</Text>)}</Text>
                        </View>
                        <Text style={{color:'white'}}>{`Vote average : ${vote_average}`}</Text>
                        <Text style={{color:'white'}}>{`Data realise : ${transformData(release_date)}`}</Text>
                        <Text style={{color:'white'}}>{runtime}</Text>
                    </View>
                </ImageBackground>

                <View>
                    <Text>{original_language}</Text>
                    <Text>{overview}</Text>
                    <Text>{popularity}</Text>
                </View>
            </View>}
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
        height:281
    },
    text:{
        color: 'white'
    },
    filmPage: {
        color: 'white'
    }
})
