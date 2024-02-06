import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [

      {
        path: 'characters',
        loadChildren: () =>
          import('../../modules/personajes/personajes.module').then((m) => m.PersonajesModule),
      },
      {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
