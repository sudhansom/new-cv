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
      mainHeader: 'Experience',
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
        },
        {
          header: 'Junior Front End Developer',
          subHeader: 'Integrify Finland',
          description: 'Integrify is a powerful, easy-to-use, low-code process application platform. Workflow software is what they do. They provide low-code, cloud-based software that helps automate processes and streamline workflow. ',
          features: [
            'Implemented Bootstrap and SASS through creating a to-do-list project with HTML and JavaScript.',
            'I had the responsibility to train 4 people the front-end basics and helped them develop further.',
            'Analyzed excessive amounts of data and extracted information from MongoDB Compass using the front-end and back-end framework such as NodeJS, Express and React. ',
            'Created many responsive websites, not just for few breakpoints but fluid width.',
            'Developed application integrations with RestAPI to improve data collection.',
          ]
        }
      ]
    },
    {
      mainHeader: 'Projects',
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
        },
        {
          header: 'Junior Front End Developer',
          subHeader: 'Integrify Finland',
          description: 'Integrify is a powerful, easy-to-use, low-code process application platform. Workflow software is what they do. They provide low-code, cloud-based software that helps automate processes and streamline workflow. ',
          features: [
            'Implemented Bootstrap and SASS through creating a to-do-list project with HTML and JavaScript.',
            'I had the responsibility to train 4 people the front-end basics and helped them develop further.',
            'Analyzed excessive amounts of data and extracted information from MongoDB Compass using the front-end and back-end framework such as NodeJS, Express and React. ',
            'Created many responsive websites, not just for few breakpoints but fluid width.',
            'Developed application integrations with RestAPI to improve data collection.',
          ]
        }
      ]
    }
  ]

  skill = [
    {
      header: 'Education',
      subHeader: 'Master of Science in Information Systems',
      description: 'Norwegian University of Science and Technology',
      date: '2011 - 2013',
      features: [],
      lang: [],
    },
    {
      header: 'Tech Stack',
      subHeader: '',
      description: '',
      date: '',
      features: ['JavaScripts', 'HTML5', 'CSS3', 'Angular', 'React', 'Node.js', 'Express', 'Docker', 'Git' ],
      lang: [],
    },
    {
      header: 'Languages',
      subHeader: '',
      description: '',
      date: '',
      lang: [
        {
          name: 'Nepali',
          type: 'Native',
          level: 5,
        },
        {
          name: 'English',
          type: 'Proficient',
          level: 4,
        }
      ],
      features: [],
    },
    {
      header: 'Training/Cources',
      subHeader: '',
      description: '',
      date: '',
      features: [],
      lang: [],
    },
    {
      header: 'Passions',
      subHeader: '',
      description: '',
      date: '',
      features: ['Coding', 'Reading', 'Sports: Play football every sunday'],
      lang: [],
    }
  ]

}
