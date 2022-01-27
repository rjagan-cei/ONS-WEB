import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFooterComponent } from './components/footer/app-footer.component';
import { AppHeaderComponent } from './components/header/app-header.component';

@NgModule({
  declarations: [AppHeaderComponent, AppFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [AppHeaderComponent, AppFooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
