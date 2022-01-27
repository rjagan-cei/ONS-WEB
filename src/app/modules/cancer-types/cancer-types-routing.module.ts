import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancerTypeComponent } from './container/cancer-type/cancer-type.component';

const routes: Routes = [
  //{path: '', component: CancerTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class CancerTypesRoutingModule { }
