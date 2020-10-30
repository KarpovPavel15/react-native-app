import {ListItem} from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import React from "react";

export const Select = ({arr,setValues}) => {
    return (
        arr.map((el, index) => (
        <ListItem key={`select-${index}`} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{el.label}</ListItem.Title>
                <RNPickerSelect
                    onValueChange={(value) => setValues(value,index)}
                    items={
                        index===2
                            ? el.value && el.value.map(el => { return {label: el.english_name, value: el.iso_639_1}})
                            :
                            index===1 ?
                                el.value!=='' && el.value.map(el => {return {label: el, value: el}})
                                :
                                index===0 ? el.value && el.value.map(el => { return {label: el.name, value: el.id}}): el.value!=='' && el.value.map(el => {return {label: el, value: el}})
                    }
                    pickerProps={{flex:1,height:100,overflow:'hidden'}}
                />
            </ListItem.Content>
            <ListItem.Chevron/>
        </ListItem>
    )))
}
