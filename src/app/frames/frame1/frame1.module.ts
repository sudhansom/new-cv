import { NgModule } from '@angular/core';

import { Frame1Component } from './frame1.component';
import { ContainerModule } from 'src/app/components/container/container.module';

@NgModule({
  declarations: [
    Frame1Component
  ],
  imports: [
    ContainerModule
  ],
  exports: [Frame1Component],
  providers: [],
  bootstrap: []
})
export class Frame1Module { }
