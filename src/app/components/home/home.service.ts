import { Injectable } from '@angular/core';
import { HttpClientService } from '../../shared/services/http-client.service';
import { API_URLS } from '../../config/api.config';

@Injectable()
export class HomeService {
    private apiKey = '?api_key=d30fb3e1b4bac290b5716bd2cc8eccb4';

  constructor(private httpClient: HttpClientService) { }

  getTrendingMovies() {
      return this.httpClient.get(API_URLS.MOVIES.TRENDING_MOVIES + this.apiKey);
  }

  getLatestMovies() {
    return this.httpClient.get(API_URLS.MOVIES.LATEST_MOVIES + this.apiKey + '&language=en-US&include_adult=false');
  }

  getPopularMovies() {
      return this.httpClient.get(API_URLS.MOVIES.POPULAR_MOVIES + this.apiKey + '&language=en-US&page=1');
  }
 }
