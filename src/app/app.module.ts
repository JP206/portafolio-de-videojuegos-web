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

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    InicioComponent,
    CampeonWaterdeepComponent,
    DragonAladoComponent
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
