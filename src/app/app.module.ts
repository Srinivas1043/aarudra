import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotuloilComponent } from './motuloil/motuloil.component';
import { AarudrahomeComponent } from './aarudrahome/aarudrahome.component';
import { NgkComponent } from './ngk/ngk.component';
import { MichelinComponent } from './michelin/michelin.component';

@NgModule({
  declarations: [
    AppComponent,
    MotuloilComponent,
    AarudrahomeComponent,
    NgkComponent,
    MichelinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
