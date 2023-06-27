import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-each-section-exp',
  templateUrl: './each-section-exp.component.html',
  styleUrls: ['./each-section-exp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EachSectionExpComponent {
  @Input() sectionHeader = '';
  @Input() header = '';
  @Input() subHeader = '';
  @Input() description = '';
}
