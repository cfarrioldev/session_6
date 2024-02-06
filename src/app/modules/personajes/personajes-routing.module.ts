import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'list', component: CharactersPageComponent
      },
        {
        path: 'detail/:id', component: DetailComponent
        },
        {
          path: '**', redirectTo: 'list', pathMatch: 'full'
        }
    ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
