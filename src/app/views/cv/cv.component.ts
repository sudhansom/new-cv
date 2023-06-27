import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {

   data = [
    {
      mainHeader: 'Summary',
      children: [
        {
          header: '',
          subHeader: '',
          description: 'Front-end developer with 2+ years of experience designing and building responsive web design and mobile apps in the financial industry. Proficient with CSS and JS Frameworks, with extensive knowledge of UX and user psychology. Notable achievements include boosting the conversion rate of an existing website by 80% with improved code and design.',
        }
      ]
    },
    {
      mainHeader: 'Summary',
      children: [
        {
          header: 'Front End Developer',
          subHeader: 'System & Metode A/S',
          description: 'System & Metode is a consulting company.',
          features: [
            'Created highly search engine optimised websites.',
            'Collaborated with a team to work on multiple clients/projects at the same time.',
            'Created optimised angular components by reducing unnecessary render cycle.',
            'Created many responsive websites, not just for few breakpoints but fluid width.',
            'Project management using gitlab.',
            'Managed shared angular component library to be used on multiple projects.'
          ]
        }
      ]
    }
  ]

}
