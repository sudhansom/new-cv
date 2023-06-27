import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CvComponent } from './cv.component';
import { Frame1Module } from 'src/app/frames/frame1/frame1.module';
import { ContainerModule } from 'src/app/components/container/container.module';
import { EachSectionExpModule } from 'src/app/components/each-section-exp/each-section-exp.module';
import { EachSectionSkillModule } from 'src/app/components/each-section-skill/each-section-skill.module';
import { CommonModule } from '@angular/common';

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
    EachSectionExpModule,
    EachSectionSkillModule,
    CommonModule,
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class CvModule { }
