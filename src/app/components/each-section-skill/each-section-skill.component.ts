import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

interface ILanguage {
  name: string,
  type: string,
  level: number
}

interface IAll {
  subHeader: string,
  description: string,
  date: string,
}

@Component({
  selector: 'app-each-section-skill',
  templateUrl: './each-section-skill.component.html',
  styleUrls: ['./each-section-skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EachSectionSkillComponent {
  @Input() sectionHeader = '';
  @Input() header? = '';
  @Input() subHeader? = '';
  @Input() description? = '';
  @Input() date? = '';
  @Input() features?:string[] = [];
  @Input() lang?: ILanguage[] = [] ;
  @Input() all?: IAll[] = [];

  numSequence(){
    return Array.from(Array(5));
  }
}
