import {StyleSheet, View} from "react-native";
import React, {useCallback, useRef, useState} from "react";
// import { Video } from "expo-av";
// import { Player } from 'video-react';

// import Video from 'react-native-video';
// import VideoPlayer from "react-native-video-player";
// import YoutubePlayer from "react-native-youtube-iframe";


export const Trailer = () => {
    const playerRef = useRef();
    const [isReady, setIsReady] = useState(false);
    const [status, setStatus] = useState(null);
    const [quality, setQuality] = useState(null);
    const [error, setError] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isLooping, setIsLooping] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const [containerMounted, setContainerMounted] = useState(false);
    const [containerWidth, setContainerWidth] = useState(null);
    // const [keyValue, setKey] = useState('');
    const [play, setPlay] = useState(false);
    // const {id,key} = useSelector(store=>store.rootMovies.currentFilm);
    // const dispatch = useDispatch();
    // const playerRef = useRef();
    // useEffect(()=>{
    //     dispatch(getCurrentMovieTrailerRequestAction({id}));
    // },[])
    //
    // useEffect(()=> key!==''||key!==undefined && setKey(key),[key])
    const togglePlaying = useCallback(() => {
        setPlay((prev) => !prev);
    }, []);
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            {/*<YoutubePlayer*/}
            {/*    ref={playerRef}*/}
            {/*    hidden={false}*/}
            {/*    height={300}*/}
            {/*    width={300}*/}
            {/*    style={{alignSelf:'stretch'}}*/}
            {/*    play={play}*/}
            {/*    videoId="iee2TATGMyI"/>*/}
            {/*<Button title={play ? "pause" : "play"} onPress={togglePlaying} />*/}
            {/*<Video*/}
            {/*    source={{ uri: `https://www.youtube.com/embed/DQ4akh9CQhc` }}*/}
            {/*    rate={1.0}*/}
            {/*    volume={1.0}*/}
            {/*    isMuted={false}*/}
            {/*    resizeMode="cover"*/}
            {/*    shouldPlay*/}
            {/*    isLooping*/}
            {/*    style={{ flex:1 }}*/}
            {/*/>*/}
            {/*<VideoPlayer*/}
            {/*    video={{ uri: `https://www.youtube.com/embed/${key}` }}*/}
            {/*    videoWidth={1600}*/}
            {/*    videoHeight={900}*/}
            {/*    resizeMode={'contain'}*/}
            {/*/>*/}
            {/*{key!==undefined && <Video muted={true}*/}
            {/*                           repeat={true}*/}
            {/*                           resizeMode={"cover"}*/}
            {/*                           rate={1.0}*/}
            {/*                           ignoreSilentSwitch={"obey"} style={styles.backgroundVideo}*/}
            {/*                           source={{uri: `https://www.youtube.com/embed/${key}`}}/>}*/}
            {/*<YoutubePlayer height={300} ref={playerRef} play={play} videoId={'DQ4akh9CQhc'}/>*/}
            {/*<WebView*/}
            {/*    ref={playerRef}*/}
            {/*    allowsFullscreenVideo*/}
            {/*    useWebKit*/}
            {/*    allowsInlineMediaPlayback*/}
            {/*    mediaPlaybackRequiresUserAction*/}
            {/*    javaScriptEnabled*/}
            {/*    scrollEnabled={false}*/}
            {/*    source={{ uri: 'https://www.youtube.com/embed/DQ4akh9CQhc' }}*/}
            {/*    style={{flex:1 }} />*/}
            {/*<WebView/>*/}
            {/*    source={{html: '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/DQ4akh9CQhc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}*/}
            {/*    style={{marginTop: 20}}*/}
            {/*/>*/}
            {/*<WebView*/}
            {/*    style={ {  marginTop: (Platform.OS === 'ios') ? 20 : 0,} }*/}
            {/*    javaScriptEnabled={true}*/}
            {/*    domStorageEnabled={true}*/}
            {/*    source={{uri: 'https://www.youtube.com/embed/DQ4akh9CQhc'}}*/}
            {/*/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})
