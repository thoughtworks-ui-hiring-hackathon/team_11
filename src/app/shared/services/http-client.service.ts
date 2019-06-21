import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  get(url: string) {
    return this.httpClient.get(url);
  }
}
