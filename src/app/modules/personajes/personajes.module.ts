import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { CharactersComponent } from './components/characters/characters.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharactersPageComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule
  ]
})
export class PersonajesModule { }
