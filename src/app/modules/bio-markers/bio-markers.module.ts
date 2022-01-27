import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BioMarkersRoutingModule } from './bio-markers-routing.module';
import { BioMarkerComponent } from './container/bio-marker/bio-marker.component';
import { BioMarkerService } from './bio-marker.service';


@NgModule({
  declarations: [
    BioMarkerComponent
  ],
  imports: [
    CommonModule,
    BioMarkersRoutingModule
  ],
  providers: [BioMarkerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BioMarkersModule { }
