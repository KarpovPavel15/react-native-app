import React, {useEffect, useState} from "react";
import {ButtonGroup} from "react-native-elements";
import * as RootNavigation from '../../rootNavigation/rootNavigation';


export const HomeScreenRouter = ({routeName}) => {
    const [index,setIndex] = useState(0);
    const buttons = ['Top','Collections','Search'];


    // useEffect(()=>{
    //     switch (routeName){
    //         case 'TOP': {
    //             setIndex(0)
    //             RootNavigation.navigate('TOP',{ name: 'Popular' });
    //         }
    //             break;
    //         case 'Collections' : {
    //             setIndex(1)
    //             RootNavigation.navigate('Collections',{ name: 'Collections' });
    //         }
    //             break;
    //         case 'Search' : {
    //             setIndex(3)
    //             RootNavigation.navigate('Search',{ name: 'Search' });
    //         }
    //             break;
    //         default : return null
    //     }
    // },[routeName])


    const clickHandler = (index) => {
        switch (index){
            case 0 : {
                setIndex(index)
                RootNavigation.navigate('TOP',{ name: 'Popular' });
            }
                break;
            case 1 : {
                setIndex(index)
                RootNavigation.navigate('Collections',{ name: 'Collections' });
            }
                break;
            case 2 : {
                setIndex(index)
                RootNavigation.navigate('Search',{ name: 'Search' });
            }
                break;
            default : return null
        }
    };

    return (
        <ButtonGroup buttons={buttons} onPress={clickHandler} selectedIndex={index} />
    );
};
