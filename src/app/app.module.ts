import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { InicioComponent } from './inicio/inicio.component';
import { EcoRunComponent } from './eco-run/eco-run.component';
import { BatallaNavalComponent } from './batalla-naval/batalla-naval.component';
import { LaughbyrinthComponent } from './laughbyrinth/laughbyrinth.component';
import { ViajeDruidaComponent } from './viaje-druida/viaje-druida.component';
import { StoneDestroyerComponent } from './stone-destroyer/stone-destroyer.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    InicioComponent,
    EcoRunComponent,
    BatallaNavalComponent,
    LaughbyrinthComponent,
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
