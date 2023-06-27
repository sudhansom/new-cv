import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EachSectionExpComponent } from "./each-section-exp.component";

@NgModule({
  declarations: [
    EachSectionExpComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[EachSectionExpComponent],
  providers: [],
  bootstrap: [],
})
export class EachSectionExpModule {}
