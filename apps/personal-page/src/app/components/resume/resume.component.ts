import { ChangeDetectionStrategy, Component } from '@angular/core';

type ResumeData = {
  companyName: string;
  jobTitle: string;
  jobDescription: string[];
  technologies: string[];
};

@Component({
  selector: 'vt-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {
  resumeData: ResumeData[] = [
    {
      companyName: 'biGENIUS',
      jobTitle: 'Senior Frontend Developer',
      jobDescription: [
        `Senior frontend developer, focused on Angular applications.
        The main job is to develop an application for smart data automation, using state manager with
        ngRx.`,
      ],
      technologies: [
        'Angular',
        'ngRx',
        'SASS',
        'Angular Material',
        'Cypress',
        'Jest',
      ],
    },
    {
      companyName: 'PagerDuty',
      jobTitle: 'Senior Software Developer',
      jobDescription: [
        'As a Senior Frontend Developer for a SaaS company, I worked on a brand new product called <Status Page>. This product empowers companies to transparently communicate the status of their services to their customers.',
        'I am primarily responsible for the development of two React applications - one for administrative use and the other for public access. However, I also contribute to shared company projects such as the design system and other shared libraries.',
        "I was part of the company's initiative to move our codebase to TypeScript and enforce better coding practices. This effort not only strengthens the quality of our code, but also enhances my own skills as a frontend developer.",
      ],
      technologies: ['React', 'Redux', 'Typescript', 'Javascript', 'SCSS'],
    },
    {
      companyName: 'Rydoo',
      jobTitle: 'Senior Software Developer',
      jobDescription: [
        "As a Senior Frontend Developer, I have been instrumental in the development of a SaaS platform that streamlines expense management. With a focus on Angular development and expertise in NgRx for state management and Jest for unit testing, I have played a critical role in the platform's success.",
        'One of the most exciting aspects of this position was the opportunity to be part of a migration to a Monorepo Approach using Nx, the implementation of a Design System, and working with a highly skilled team. This experience not only allowed me to sharpen my development skills, but also challenged me to maintain a high standard of code quality',
      ],
      technologies: [
        'Angular',
        'ngRx',
        'Nx',
        'Typescript',
        'Javascript',
        'SCSS',
        'HTML',
      ],
    },
    {
      companyName: 'Hovione',
      jobTitle: 'Senior Software Developer',
      jobDescription: [
        `
        As a Full Stack JavaScript Developer at Hovione, I have taken on the
        challenge of starting new projects from the ground up. I specialize in Angular
        on the frontend and ExpressJS on the backend, with a focus on Industry 4.0.`,
        `
        In these projects, I have taken a leadership role in the frontend architecture,
        sharing best programming practices with the team, and introducing new
        technologies and techniques. I have also played a crucial role in the
        implementation of containers using Docker, end-to-end testing with Cypress
        and Chai, and continuous integration and deployment with Jenkins.
        `,
        `
        I have a strong understanding of Angular, JavaScript, ExpressJS, Docker,
        HTML, CSS, and SCSS, and I am confident in my ability to deliver robust,
        scalable, and efficient solutions that meet the project requirements. I am
        passionate about staying up-to-date with the latest technologies and trends,
        and I am eager to continue expanding my skill set and taking on new
        challenges
        `,
      ],
      technologies: [
        'Angular',
        'Node.js',
        'ExpressJs',
        'Typescript',
        'Javascript',
        'Angular Material',
      ],
    },
    {
      companyName: 'BNP Paribas Securities Services',
      jobTitle: 'Senior Frontend Developer',
      jobDescription: [
        `At BNP Paribas, I have focused my efforts on developing mobile applications
        using Ionic with Angular 2+. I have worked on a variety of financial applications
        that have challenged me to use my skills as a frontend developer to deliver
        solutions that meet the demands of a bank.`,
        `
        One of my most significant contributions at BNP was building proof of concepts
        for the migration of the current technology stack to Angular, as well as creating
        a design system for the department. I have also played a key role in the
        development of other applications for the bank, utilizing Ionic and my expertise
        in CSS (SCSS), HTML, and JavaScript to assist other teams.
        `,

      ],
      technologies: [
        'Angular', 'Ionic', 'Javascript', 'Typescript', 'CSS', 'SCSS'
      ]
    },
    {
      companyName: 'Portuguese Association of Pharmacies',
      jobTitle: 'Frontend Developer',
      jobDescription: [
        'Frontend developer for Portuguese National Pharmacy Association.',
        ' Working with technologies like Angular, Javascript, HTML, CSS, LESS, and others, in very demanding projects.',
        'The main project involved Angular REDUX architecture with NGRX.'
      ],
      technologies: ['Angular', 'LESS', 'ngRx', 'Javascript', 'Typescript']
    },
    {
      companyName: 'Global Media Group',
      jobTitle: 'Frontend Developer',
      jobDescription: ['Mainly working with technologies such as Angular 2/4, Javascript, HTML5, CSS3 on a new project for advertising',
    'Worked on company flagship platform with JS CSS and HTML'],
      technologies: ['Angular', 'Typescript', 'Javascript', 'JSF', 'CSS', 'HTML']
    },{
      companyName: 'WeCreateYou',
      jobTitle: 'Software Developer',
      jobDescription: [

      ],
      technologies: ['JavaScript', 'PHP', 'HTML', 'CSS']
    }
  ];
}
