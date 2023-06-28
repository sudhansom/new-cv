import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

interface IData {
mainHeader: string;
children: {
  header?: string;
  subHeader?: string;
  description?: string;
  features?: string[];
  date?: string;
  address?: string;
  link?: string;
}[];
};

@Component({
  selector: 'app-each-section-exp',
  templateUrl: './each-section-exp.component.html',
  styleUrls: ['./each-section-exp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EachSectionExpComponent {
  @Input() data: IData[] = [];

  ngOnInit(){
    console.log('hello.....');
  }
}
