import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioMarkerComponent } from './container/bio-marker/bio-marker.component';

const routes: Routes = [
  //{path: '', component: BioMarkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class BioMarkersRoutingModule { }
