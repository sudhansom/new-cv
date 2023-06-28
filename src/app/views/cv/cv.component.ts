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
          description: 'As a frontend developer, I have a strong command of JavaScript, HTML, and CSS. I am proficient in frameworks such as React and Angular, enabling me to create highly search engine optimised websites. My expertise lies in writing clean code and optimising render cycles, resulting in responsive sites with fluid width. Additionally, I possess knowledge of  Backend using Express and Node.JS and my familiarity with Git allows me to effectively manage team projects.',
        }
      ]
    },
    {
      mainHeader: 'Experience',
      children: [
        {
          header: 'Front End Developer',
          subHeader: 'System & Metode A/S',
          description: 'System & Metode A/S is a technology company specializing in software development and IT solutions. With expertise in various industries, we offer tailored systems, consultancy services, and innovative approaches to optimize business processes.',
          date: '06/2022 - ongoing',
          address: 'Horsholm, Denmark',
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
          header: 'Junior FrontEnd Developer',
          subHeader: 'Integrify Finland',
          description: 'Integrify is a powerful, easy-to-use, low-code process application platform. Workflow software is what they do. They provide low-code, cloud-based software that helps automate processes and streamline workflow. ',
          date: '07/2021 - 05/2022',
          address: 'Finland(Remote)',
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
          header: 'All Countries Information',
          subHeader: '',
          description: 'Get all Information from each countries in the world.',
          features: [
            'Customize column: select column name of your choice.',
            'Search a single country / select a single countries detail in separate page.',
            'Select a theme of your choice.',
            'Sort the countries on basis of region, population and alphabet',
            'Select the favorite and add to cart',
          ],
          link:'https://all-countries-info-by-bhuwan.netlify.app/'
        },
        {
          header: 'Live chat',
          subHeader: '',
          description: 'Multiple persons can chat from different place of the world in different chat group',
          features: [],
          link:'https://stoic-swirles-e06721.netlify.app/',
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
        },
        {
          name: 'Danish',
          type: 'Intermediate',
          level: 2,
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
      all: [
        {
          subHeader: 'CSS Demestified',
          description: 'CSS/HTML by youtouber: Kevin Powel',
          date: '2021',
        },
        {
          subHeader: 'Software Development Academy',
          description: 'Python from scratch',
          date: '2020',
        },
        {
          subHeader: 'HackerRank, FrontEnd Expert',
          description: 'Solved more than 500 interview questions',
          date: '2019',
        },
      ]
    },
    {
      header: 'Passions',
      subHeader: '',
      description: '',
      date: '',
      features: ['Coding', 'Reading', 'Sports: Play football every Sunday'],
      lang: [],
    }
  ]

}
