import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MotuloilComponent} from './motuloil/motuloil.component';
import {AarudrahomeComponent} from './aarudrahome/aarudrahome.component';
import {MichelinComponent} from './michelin/michelin.component';
import {NgkComponent} from './ngk/ngk.component';
import {OpeningComponent} from './opening/opening.component';
const routes: Routes = [
  {path: 'motulOil', component: MotuloilComponent},
  {path: 'michelin', component: MichelinComponent},
  {path: 'ngk', component: NgkComponent},
  {path: 'home', component: AarudrahomeComponent },
  {path: '', component: OpeningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
