import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { InicioComponent } from './inicio/inicio.component';
import { CampeonWaterdeepComponent } from './campeon-waterdeep/campeon-waterdeep.component';
import { DragonAladoComponent } from './dragon-alado/dragon-alado.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: SobreMiComponent },
  { path: 'campeon-de-waterdeep', component: CampeonWaterdeepComponent},
  { path: 'dragon-alado-de-ra', component: DragonAladoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
