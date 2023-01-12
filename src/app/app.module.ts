import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { InicioComponent } from './inicio/inicio.component';
import { CampeonWaterdeepComponent } from './campeon-waterdeep/campeon-waterdeep.component';
import { DragonAladoComponent } from './dragon-alado/dragon-alado.component';
import { TemorSabioComponent } from './temor-sabio/temor-sabio.component';
import { ViajeDruidaComponent } from './viaje-druida/viaje-druida.component';
import { StoneDestroyerComponent } from './stone-destroyer/stone-destroyer.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    InicioComponent,
    CampeonWaterdeepComponent,
    DragonAladoComponent,
    TemorSabioComponent,
    ViajeDruidaComponent,
    StoneDestroyerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
