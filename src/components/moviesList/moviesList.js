import {MoviePoster} from "../moviePoster";
import {FlatList, TouchableHighlight} from "react-native";
import React from "react";

export const MoviesList = ({data,action,load,navigation}) => {

    const filmDescription = item =>{
        return navigation.navigate('Info', item )
    }
    return(
        <FlatList
            keyExtractor={(item, index) => `list-item-${index}`}
            data={data}
            style={{flex:1}}
            renderItem={({item}) => <TouchableHighlight underlayColor="#DDDDDD" onPress={()=>filmDescription(item)}>
                                        <MoviePoster item={item}/>
                                    </TouchableHighlight>
            }
            onEndReached={()=>{
                if(load){
                    action();
                    load=false
                }
            }}
            onEndReachedThreshold={0.8}
            onMomentumScrollBegin={()=>{
                load=true
            }}
        />
    )
};
