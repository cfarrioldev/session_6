import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/characters.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id: number = 0
  charactersByLocalStorage = JSON.parse(localStorage.getItem('characters')!)
  character!: Character

  constructor(private router: ActivatedRoute) {
      this.router.params.subscribe((param) => {
        this.id = Number(param['id'])
      })

      this.charactersByLocalStorage.filter((char: Character) => {
        if(char.id === this.id){
          this.character = char
        }
      })
  }

}
