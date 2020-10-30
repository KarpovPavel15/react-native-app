import {View} from "react-native";
import React from "react";
import {OverlayLayoutContainer} from "../../overlayLayout";
import {MoviesList} from "../../../components/moviesList";

export const CollectionsPage = ({navigation,getFilterData,filteredFilms,topFilms,loadDinamicAllData,loadFilterData}) => {
    return(
        <View style={{flex:1}}>
            <OverlayLayoutContainer getFilterData={getFilterData}/>
            {filteredFilms.length===0 && <MoviesList navigation={navigation} data={topFilms} load={true} action={loadDinamicAllData}/>}
            {filteredFilms.length>0 && <MoviesList navigation={navigation} data={filteredFilms} load={true} action={loadFilterData}/>}
        </View>
    )
}
