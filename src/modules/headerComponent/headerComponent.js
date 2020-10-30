import {View, StyleSheet, StatusBar} from "react-native";
import React from "react";
import { Header } from "react-native-elements";

export const HeaderComponent = () => {
    return(
        <View style={styles.container}>
            <StatusBar/>
            <Header
                containerStyle={styles.headerContainer}
                leftComponent={{ icon: 'menu', color: '#fff'}}
                centerComponent={{ text: 'MOVIE LIST', style: { color: '#fff' }}}
                rightComponent={{ icon: 'home', color: '#fff'}}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headerContainer:{
        textAlign:'center'
    }
});
