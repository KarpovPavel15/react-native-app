import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {Image} from "react-native-elements";
import {transformData} from "../../utils";

export const MoviePoster = ({item:{poster_path,release_date,original_title}})=> {

    const releaseDate = transformData(release_date);
    return(
        <View style={styles.container}>
            <Image source={{uri:`http://image.tmdb.org/t/p/w300/${poster_path}`}} style={{ width: 300, height: 300 }}/>
            <Text>{original_title}</Text>
            <Text>{releaseDate}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingBottom:100,
        alignItems:'center'
    }
})
