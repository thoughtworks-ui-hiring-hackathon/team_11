let COMMON_URL = 'https://api.themoviedb.org/3/';

let apiURLDef = {
    MOVIES: {
        TRENDING_MOVIES : COMMON_URL + 'trending/movie/week',
        LATEST_MOVIES: COMMON_URL + 'movie/now_playing',
        POPULAR_MOVIES: COMMON_URL + 'movie/popular',
        GENRE_LIST: COMMON_URL + 'genre/movie/list'
    }
};

export const API_URLS = apiURLDef;