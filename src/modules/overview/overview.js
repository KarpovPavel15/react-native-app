import {Text, View} from "react-native";
import React from "react";
import {useSelector} from "react-redux";

export const Overview = () => {
    const {original_language,overview,popularity} = useSelector(store=>store.rootMovies.currentFilm)
    return (
        <View>
             <Text>{original_language}</Text>
             <Text>{overview}</Text>
             <Text>{popularity}</Text>
        </View>
    )
}
