import { NgModule } from "@angular/core";
import { EachSectionSkillComponent } from "./each-section-skill.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    EachSectionSkillComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[EachSectionSkillComponent],
  providers: [],
  bootstrap: [],
})
export class EachSectionSkillModule {}
