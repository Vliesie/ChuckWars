import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
 

  public searchAPI(query: string){
    return this.httpClient.get(`https://chuckwarsapi.herokuapp.com/search?Query=${query}`);
  }

  public People(){
    return this.httpClient.get(`https://chuckwarsapi.herokuapp.com/Swapi/People`);
  }

  public Categories(){
    return this.httpClient.get(`https://chuckwarsapi.herokuapp.com/Chuck/categories`);
  }

  //A.K.A category Clicked
  public randomJoke(query: string){
    return this.httpClient.get(`https://chuckwarsapi.herokuapp.com/Chuck/randomjoke?query=${query}`);
  }

}
