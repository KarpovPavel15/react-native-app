import { KeyboardAvoidingView, View, Platform,StyleSheet} from "react-native";
import React from "react";
import {SearchBar} from "react-native-elements";
import {MoviesList} from "../../../components/moviesList";

export const SearchPage = ({navigation, loadDinamicAllData,loadDinamicSearchData,text,allFilms,searchedFilms,getTextInput,clearTextInputRequest}) => {
    const clearHandler = () => clearTextInputRequest();
    let load = true;
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                style={{flex:1}}
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <SearchBar
                    placeholder="What movie are we looking for?"
                    onChangeText={getTextInput}
                    value={text}
                    onClear={clearHandler}
                    lightTheme
                />
                {
                    text!=='' && searchedFilms  && <MoviesList navigation={navigation} data={searchedFilms} load={load} action={loadDinamicSearchData}/>
                }
                {
                    text==='' && allFilms && <MoviesList navigation={navigation} data={allFilms} load={load} action={loadDinamicAllData}/>
                }
            </KeyboardAvoidingView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }

})
