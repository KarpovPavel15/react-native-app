import {View} from "react-native";
import {Button} from "react-native-elements";
import React from "react";
import {Select} from "../../../components/select";

export const PickerComponent = ({arr,toggleOverlay,setValues,filterHandler}) => {
    return(
        <View style={{flex: 1,justifyContent:'space-around'}}>
            <View>
                <Select arr={arr} setValues={setValues}/>
            </View>
            <View>
                <Button style={{marginBottom:5}} onPress={filterHandler} title="Confirm"/>
                <Button style={{marginTop:5}} onPress={()=>toggleOverlay()} title="Cancel"/>
            </View>
        </View>
    )
}
