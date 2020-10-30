import {StatusBar, StyleSheet, View} from "react-native";
import React from "react";
import {MoviesContainer} from "../movies";
import {CollectionsPageContainer} from "../collectionsPage";
import {SearchPageContainer} from "../searchPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {HeaderComponent} from "../headerComponent";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from "@react-navigation/stack";
import {MovieInfo} from "../movieInfo";

export const Page = (props) => {
    console.log(props)
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    const createTopStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Top" component={MoviesContainer}/>
            <Stack.Screen name="Info" component={MovieInfo}/>
        </Stack.Navigator>
    )
    const createCollectionStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Collections" component={CollectionsPageContainer}/>
            <Stack.Screen name="Info" component={MovieInfo}/>
        </Stack.Navigator>
    )
    const createSearchStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchPageContainer}/>
            <Stack.Screen name="Info" component={MovieInfo}/>
        </Stack.Navigator>
    )

    return (
        <View style={styles.container}>
                {/*<HeaderComponent/>*/}
                <StatusBar barStyle="dark-content"/>
                <View style={styles.contentArea}>
                    <Tab.Navigator>
                        <Tab.Screen
                            name="TOP"
                            children = {createTopStack}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="diamond" color={color} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen name="Collections"
                                    children = {createCollectionStack}
                                      options={{
                                          tabBarIcon: ({ color, size }) => (
                                              <MaterialCommunityIcons name="folder" color={color} size={size} />
                                          ),
                                      }}
                        />
                        <Tab.Screen name="Search"
                                    children = {createSearchStack}
                                      options={{
                                          tabBarIcon: ({ color, size }) => (
                                              <MaterialCommunityIcons name="magnify" color={color} size={size} />
                                          ),
                                      }}
                        />
                    </Tab.Navigator>
                </View>
                {/*<HomeScreenRouter*/}
                {/*/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentArea:{
        width:'100%',
        flex:1
    }
});
