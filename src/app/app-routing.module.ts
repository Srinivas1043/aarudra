import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MotuloilComponent} from './motuloil/motuloil.component';
import {AarudrahomeComponent} from './aarudrahome/aarudrahome.component';
import {MichelinComponent} from './michelin/michelin.component';
import {NgkComponent} from './ngk/ngk.component';
import {Motuloilpage2Component} from './motuloilpage2/motuloilpage2.component';
const routes: Routes = [
  {path: 'motulOil', component: MotuloilComponent},
  {path: 'motulOilExtension', component: Motuloilpage2Component},
  {path: 'michelin', component: MichelinComponent},
  {path: 'ngk', component: NgkComponent},
  {path: '', component: AarudrahomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
