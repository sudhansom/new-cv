import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CvComponent } from './cv.component';
import { Frame1Module } from 'src/app/frames/frame1/frame1.module';
import { ContainerModule } from 'src/app/components/container/container.module';

const appRoutes: Routes = [
  {
    path: '',
    component: CvComponent,
  }
]
@NgModule({
  declarations: [
    CvComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    Frame1Module,
    ContainerModule,
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class CvModule { }
