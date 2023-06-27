import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-each-section-skill',
  templateUrl: './each-section-skill.component.html',
  styleUrls: ['./each-section-skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EachSectionSkillComponent {
  @Input() sectionHeader = '';
  @Input() header = '';
  @Input() subHeader = '';
  @Input() description = '';
}
