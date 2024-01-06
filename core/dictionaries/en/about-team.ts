import OurApproach from '@/components/PageComponents/AboutTeam/components/OurApproach';

export const aboutTeamDictionaryEng = {
  headings: {
    aboutTeam: 'About the team',
    howWeWorking: 'How we are working',
    ourApproach:'Our approach to your task',
    reviews: 'Reviews that people wrote themselves',
    whoLeadsTeam: 'Who leads the team'
  },
  description: [
    'We work with clients who know their business well and who care.',
    'We turn projects into a working “first version” - we leave the main thing, throw out everything that is not needed, and try to launch it as soon as possible.',
    'Typically, our projects run on next.js, which allows us to expand their functionality and increase loading speed. And for a faster start, we use a traditional stack.'
  ],
  pageNav: {
    whoCharge: "Who's in charge",
    ourMethod: 'Our method',
    ourApproach: 'Our approach',
    reviews: 'Reviews'
  },
  team: {
    bobnevGerman: {
      fullName: 'German Bobnev',
      responsible: 'Responsible for communication and management'
    },
    dotsenkoDanil: {
      fullName: 'Danil Dotsenko',
      responsible: 'Responsible for the team, design and development'
    }
  } as { [key: string]: { fullName: string; responsible: string } },
  foundersMessage: [
    'It happens that people turn to us not for answers to questions, but to formulate the questions themselves.',
    'Usually they write: «I don’t know what tasks to set for you in order to release the project»; «what needs to be included in the specification and what should be thrown out»; «Is this necessary, what is important to me now.»',
    'Write',
    ", we'll try to help."
  ],
  howWeWork: {
    options: ['Our method', 'Others'],
    items: {
      gettingAcquainted: [
        'Let\'s get acquainted,',
        'We dive into your task, determine the «most important» and create a backlog for the launch, and divide the project into sprints.',
        'We receive the specifications and begin to estimate the cost.'
      ],
      provide: [
        'We will provide',
        'a minimal team and assign it a task',
        'Let\'s define',
        'minimum budget',
        'No, we will draw up a maximum plan to earn as much as possible.'
      ],
      transform: [
        'Let\'s turn',
        'your project into the “first version” of the product.',
        'The project bloats and becomes unmanageable.'
      ],
      check: [
        'Checking',
        'hypotheses, after which we improve and develop a working system.',
        'HOW?? Chaos!!!'
      ]
    }
  },
  ourApproach: {
    themes: [
      '1. Understanding the task',
      '2. Problem',
      '3. Reflection',
      '4. Creation',
      '5. Release of the first version to the market',
      '6. Cycle',
    ],
    items: {
      task: [
        'Asking questions.',
        '⋅ Conducting an in-depth interview.',
        '⋅ We consolidate business goals.',
        '⋅ We are drawing up a plan for the release of the first version.',
        '⋅ We divide the project into weekly sprints.',
        '⋅ We select a team with the necessary experience.',
        '⋅ We prepare a transparent estimate.',
        '⋅ If necessary, we reduce the amount of work or change the technology stack.',
      ],
      problem: [
        '⋅ We are studying the niche and your past experiments',
        '⋅ Researching users and their needs',
        '⋅ Statement of the problem',
        '⋅ We help you understand the design problem',
      ],
      reflection: [
        '⋅ Competitor analysis',
        '⋅ User survey',
        '⋅ Synthesis of ideas and hypotheses',
        '⋅ Assessing attitudes towards an idea',
        '⋅CJM',
        '⋅JTBD',
        '⋅Sketches',
      ],
      creation: [
        '⋅Design',
        '⋅ We conduct a survey and design criticism',
        '⋅ Conducting usability testing',
        '⋅ We are conducting corridor testing',
        '⋅ Collecting the report',
        '⋅ If the hypothesis is not confirmed, we test the next one',
        '⋅ We implement and check the work of developers',
      ],
      newVersion: ['⋅ Launching the first version of the project'],
      cycle: [
        '⋅Collecting feedback from users',
        '⋅ We are finalizing the product',
        '⋅ Expanding the functionality of a working system',
      ]
    }
  },
  popUps: {
    actions: {
      write: 'Write'
    },
    questions: {
      title: 'Questions:',
      items: [
        '1. What does your company do?',
        '2. What problems, tasks, challenges are you facing now? ',
        '2. What problems, tasks, challenges are you facing now? ',
        '4. What could be the first version of your product/online media/brand?',
        '5. What do we need to study before work?',
        '6. What is your personal role?',
        '7. Who also makes design decisions?'
      ]
    }
  },
  reviews: {
    test: 'We highly appreciated the fact that the guys are ready to improve the product already announced by the client. We finalized the cases and listened to us, the developers. It was a great collab. After all, we worked together on more than 50 screens. (Fish)'
  } as { [key: string]: string }
}