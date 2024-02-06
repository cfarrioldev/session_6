import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  API_URL: string = API_URL
  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get(`${this.API_URL}/character`)
  }

}
