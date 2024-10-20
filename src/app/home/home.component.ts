import { Component,OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title = 'angular-poke';
  pokemonsList: any[] =[];
  pokeInfo: any[] =[];
  loadData: boolean = false;
  
  constructor(private pokeService: PokemonServiceService) {
  }
  ngOnInit(): void {
    this.getListPokes();
  }

  getListPokes(): void{
    this.pokeService.getAllPokemon().subscribe(
      (data) =>{
        this.pokemonsList = data.results;    
        this.pokemonsList.map(pokemon=>{
           this.getPokeInfo(pokemon.url)
        });
        this.loadData = true;
      }
    );
  }

  getPokeInfo(url: string): void{
    this.pokeService.getPokeInfo(url).subscribe(
      (pokeInfo) =>{
        this.pokeInfo.push(pokeInfo)
      }
    );
  }

}
