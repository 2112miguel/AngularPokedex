import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from '../pokemon-service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnInit{
  id: string = '';
  pokeInfo: any ;
  display: boolean = false;
  
  constructor(private route: ActivatedRoute, private pokeService: PokemonServiceService) {
    const params = this.route.snapshot.params;
    this.id = params['id'];
  }

  ngOnInit(): void{
    this.getPokeInfo();
  }

  getPokeInfo(): void{
    this.pokeService.getAllPokemon(this.id).subscribe(
      (data)=>{
        this.pokeInfo = data;
        console.log(this.pokeInfo.sprites.front_default)
        this.display = true;
      }
    )
  }
}
