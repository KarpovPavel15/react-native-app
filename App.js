import React from 'react';
import {store} from "./src/store";
import {Provider} from "react-redux";
import {Page} from "./src/modules/page";
import {NavigationContainer} from "@react-navigation/native";
import {navigationRef} from "./src/rootNavigation";
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {SignIn} from "./src/modules/signIn";
import {Registration} from "./src/modules/registration";
import {createStackNavigator} from "@react-navigation/stack";

export default function App() {
    const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();

    const signInNavigation = () => (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="Registration" component={Registration}/>
        </Stack.Navigator>
    )
    const registrationNavigation = () => (
        <Stack.Navigator>
            <Stack.Screen name="Registration" component={Registration}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
        </Stack.Navigator>
    )

    return (
        <NavigationContainer ref={navigationRef}>
            <Provider store={store}>
                <Drawer.Navigator>
                    <Drawer.Screen name="Page" component={Page} />
                    <Drawer.Screen name="SignIn" children={signInNavigation} />
                    <Drawer.Screen name="Registration" children={registrationNavigation} />
                </Drawer.Navigator>
            </Provider>
         </NavigationContainer>
    );
}

