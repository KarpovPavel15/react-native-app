import {StatusBar, StyleSheet, View} from "react-native";
import React from "react";
import {MoviesContainer} from "../movies";
import {CollectionsPageContainer} from "../collectionsPage";
import {SearchPageContainer} from "../searchPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from "@react-navigation/stack";
import {MovieInfo} from "../movieInfo";
import {Trailer} from "../trailer";
import {Overview} from "../overview";
import {CalendarComponent} from "../calendarComponent";
import {DayInfo} from "../dayInfo";

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
            <Stack.Screen name="Info" component={Trailer}/>
        </Stack.Navigator>
    )
    const createSearchStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchPageContainer}/>
            <Stack.Screen name="Info" component={Overview}/>
        </Stack.Navigator>
    )
    const createCalendarStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Calendar" component={CalendarComponent}/>
            <Stack.Screen name="DayInfo" component={DayInfo}/>
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
                        <Tab.Screen name="Calendar"
                                    children = {createCalendarStack}
                                      options={{
                                          tabBarIcon: ({ color, size }) => (
                                              <MaterialCommunityIcons name="calendar" color={color} size={size} />
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
