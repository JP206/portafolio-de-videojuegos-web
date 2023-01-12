import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { InicioComponent } from './inicio/inicio.component';
import { CampeonWaterdeepComponent } from './campeon-waterdeep/campeon-waterdeep.component';
import { DragonAladoComponent } from './dragon-alado/dragon-alado.component';
import { TemorSabioComponent } from './temor-sabio/temor-sabio.component';
import { ViajeDruidaComponent } from './viaje-druida/viaje-druida.component';
import { StoneDestroyerComponent } from './stone-destroyer/stone-destroyer.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: SobreMiComponent },
  { path: 'campeon-de-waterdeep', component: CampeonWaterdeepComponent},
  { path: 'dragon-alado-de-ra', component: DragonAladoComponent },
  { path: 'el-temor-de-un-sabio', component: TemorSabioComponent},
  { path: 'el-viaje-del-druida', component: ViajeDruidaComponent},
  { path: 'stone-destroyer', component: StoneDestroyerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //, {scrollPositionRestoration: 'enabled'}
  exports: [RouterModule]
})
export class AppRoutingModule { }
