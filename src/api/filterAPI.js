import axios from "axios";
import {API__KEY} from "../utils";

export function fetchLanguages (){
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/configuration/languages?api_key=${API__KEY}`
    });
}
export function fetchGenres (){
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API__KEY}&language=en-US`
    });
}
