import { Injectable } from '@angular/core';
import { HttpClientService } from '../../shared/services/http-client.service';
import { API_URLS } from '../../config/api.config';

@Injectable()
export class ExploreService {
    private apiKey = '?api_key=d30fb3e1b4bac290b5716bd2cc8eccb4';

    constructor(private httpClient: HttpClientService) { }

    getMovies(searchQuery) {
        return this.httpClient.get(API_URLS.MOVIES.SEARCH + this.apiKey + '&language=en-US&query=' + searchQuery + '&page=1&include_adult=false');
    }

    getGenres() {
        return this.httpClient.get(API_URLS.MOVIES.GENRE_LIST + this.apiKey + '&language=en-US');
    }

    getImageConfig() {
        return this.httpClient.get('https://api.themoviedb.org/3/configuration' + this.apiKey)
    }
}
