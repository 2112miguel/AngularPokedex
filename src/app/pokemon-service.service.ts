import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private pokeApi = 'https://pokeapi.co/api/v2/pokemon/';
  
  constructor(private http: HttpClient) { }

  getAllPokemon(id?: string): Observable<any>{
    
    let apiUrl = this.pokeApi;

    if(id){
      apiUrl+=`${id}` 
    }
    return this.http.get<any>(apiUrl);
  }

  getPokeInfo(url: string): Observable<any>{
    return this.http.get<any>(url);
  }

}
