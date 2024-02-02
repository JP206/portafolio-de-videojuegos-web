import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { InicioComponent } from './inicio/inicio.component';
import { EcoRunComponent } from './eco-run/eco-run.component';
import { BatallaNavalComponent } from './batalla-naval/batalla-naval.component';
import { LaughbyrinthComponent } from './laughbyrinth/laughbyrinth.component';
import { ViajeDruidaComponent } from './viaje-druida/viaje-druida.component';
import { StoneDestroyerComponent } from './stone-destroyer/stone-destroyer.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: SobreMiComponent },
  { path: 'eco-run', component: EcoRunComponent},
  { path: 'batalla-naval', component: BatallaNavalComponent },
  { path: 'laughbyrinth', component: LaughbyrinthComponent},
  { path: 'el-viaje-del-druida', component: ViajeDruidaComponent},
  { path: 'stone-destroyer', component: StoneDestroyerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
