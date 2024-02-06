import { Component, OnInit } from '@angular/core';
import { ApiResponse, Character } from 'src/app/characters.interface';
import { CharactersService } from 'src/app/modules/personajes/services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css']
})
export class CharactersPageComponent implements OnInit {
  characters: Character[] = []
  charactersInLocalStorage = localStorage.getItem('characters')
  constructor(private charactersService: CharactersService){}

  ngOnInit(): void {
    //Todo asignar interfaz
    if(!this.charactersInLocalStorage?.length) {
      this.charactersService.getCharacters().subscribe({next: (response: any) => {
        //gestiona la respuesta cuando da ok
        this.characters = response.results
        localStorage.setItem('characters', JSON.stringify(this.characters))
    },
    error: (error) => {
        //gestiona posible error desde la api
    }
    }
    )
    }else {
      this.characters = JSON.parse(this.charactersInLocalStorage!)
    }

  }

}
