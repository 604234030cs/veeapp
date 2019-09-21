import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  
  public baseURL = 'https://api.themoviedb.org/3/';
  public apiKey = 'api_key=875eb98a7563ed49b4199a4d60015b5e';

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getNowMovie(){
    const url = this.baseURL + 'movie/now_playing?' + this.apiKey;
    return this.http.get(url);
  }
  getUpComing(){
    const url = this.baseURL + 'movie/upcoming?' + this.apiKey;
    return this.http.get(url);
  }
  getPopular(){
    const url = this.baseURL + 'movie/popular?' + this.apiKey;
    return this.http.get(url);
  }
  getToprated(){
    const url = this.baseURL +'movie/top_rated?' + this.apiKey;
    return this.http.get(url);
  }
}
