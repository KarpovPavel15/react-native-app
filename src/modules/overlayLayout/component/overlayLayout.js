import React from 'react';
import {Button, Overlay} from 'react-native-elements';
import {StyleSheet, View} from "react-native";
import {PickerComponentContainer} from "../../pickerComponent";

export const OverlayLayout = ({getFilterData, toggleOverlay, visible, list}) => {
    return (
        <View style={styles.container}>
            <Button style={styles.btn} title="Settings" onPress={toggleOverlay}/>
            <Overlay fullScreen={true} isVisible={visible}>
                <PickerComponentContainer getFilterData={getFilterData} arr={list} toggleOverlay={toggleOverlay}/>
            </Overlay>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        paddingBottom: 20,
        fontSize: 20,

    },
    backdrop: {},

})
