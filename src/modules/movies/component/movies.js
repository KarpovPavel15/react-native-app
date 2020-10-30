import {StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import {MoviesList} from "../../../components/moviesList";

export const Movies = ({ movies,loadDinamicData, navigation }) => {
    let [onEndReachedCalledDuringMomentum,setLoad] = useState(true);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Popular films in 2020</Text>
            <MoviesList navigation={navigation} data={movies} action={loadDinamicData} load={onEndReachedCalledDuringMomentum}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
        fontSize:20
    }
})
