import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioMarkersRoutingModule } from './modules/bio-markers/bio-markers-routing.module';
import { CancerTypesRoutingModule } from './modules/cancer-types/cancer-types-routing.module';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch:'full'},
  {path: 'biomarkers', loadChildren: () => import('./modules/bio-markers/bio-markers.module').then(b => b.BioMarkersModule)},
  {path: 'cancer-types', loadChildren: () => import('./modules/cancer-types/cancer-types.module').then(c => c.CancerTypesModule)}
];

@NgModule({
  imports: [
   BioMarkersRoutingModule, RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', useHash: true}),
   CancerTypesRoutingModule, RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', useHash: true}),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
