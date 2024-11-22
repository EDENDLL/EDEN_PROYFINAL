import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    // Definir rutas aquí, por ejemplo:
  // { path: '', component: HomeComponent },
  // { path: '**', redirectTo: '' }, // Ruta comodín
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
