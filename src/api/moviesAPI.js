import axios from "axios";
import {API__KEY} from "../utils";

export function fetchPopularFilms (page){
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${API__KEY}&language=en-US&page=${page}`
    });
}
export function fetchSearchingFilms (movie,pageSearch){
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/search/movie?api_key=${API__KEY}&language=en-US&query=${movie[0]}&page=${pageSearch[0]}&include_adult=true`
    });
}
export function fetchAllFilms (page){
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API__KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${page}`
    });
}
export function fetchTopFilms (page){
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API__KEY}&language=en-US&page=${page}`
    });
}
export function fetchFilteredFilms ({page,genre,arrayDate,arrayVote,language}){
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API__KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=${arrayDate[0]}&primary_release_date.lte=${arrayDate[1]}&vote_average.gte=${arrayVote[0]}&vote_average.lte=${arrayVote[1]}&with_genres=${genre}&with_original_language=${language}`
    });
}

export function fetchCurrentFilm (id){
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API__KEY}&language=en-US`
    });
}

export function fetchCurrentTrailer(id){
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API__KEY}&language=en-US`
    });
}
export function fetchCalendarDates(currentData,nextData){
    return axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API__KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${currentData}&primary_release_date.lte=${nextData}`
    });
}
