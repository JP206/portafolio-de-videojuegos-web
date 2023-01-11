import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { InicioComponent } from './inicio/inicio.component';
import { CampeonWaterdeepComponent } from './campeon-waterdeep/campeon-waterdeep.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: SobreMiComponent },
  { path: 'campeon-de-waterdeep', component: CampeonWaterdeepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
