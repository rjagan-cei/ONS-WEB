import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancerTypesRoutingModule } from './cancer-types-routing.module';
import { CancerTypeComponent } from './container/cancer-type/cancer-type.component';
import { CancerTypeService } from './cancer-type.service';


@NgModule({
  declarations: [
    CancerTypeComponent
  ],
  imports: [
    CommonModule,
    CancerTypesRoutingModule
  ],
  providers: [CancerTypeService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CancerTypesModule { }
