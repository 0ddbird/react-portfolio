import React from 'react'

const projects = [
  {
    id: 0,
    title: 'Booki',
    techs: ['Git', 'HTML', 'CSS'],
    themes: ['HTML/CSS fundamentals', 'Responsivity'],
    github: 'https://github.com/0ddbird/OC_P2_Booki',
    githubPage: 'https://0ddbird.github.io/OC_P2_Booki/',
    description: (
      <>
        The goal of this project was to build a responsive page for mobile, tablet and desktop using HTML and CSS.
        During this first project, I learned to version my code with Git and GitHub, to use the flex property and media queries.
        <br />I also learned:
        <ul>
          <li>- CSS variables</li>
          <li>- Pseudo-classes and pseudo-elements</li>
          <li>- Performant CSS transitions thanks to this <a href="https://tobiasahlin.com/blog/how-to-animate-box-shadow/" target="_blank" rel="noopener noreferrer">great article by Tobias Ahlin</a></li>
        </ul>
      </>
    )
  },
  {
    id: 1,
    title: 'Oh My Food',
    techs: ['Git', 'HTML', 'Sass'],
    themes: ['Sass', 'CSS Animations'],
    github: 'https://github.com/0ddbird/OC_P3_Ohmyfood',
    githubPage: 'https://0ddbird.github.io/OC_P3_Ohmyfood/',
    description: (
      <>
        This project aimed at teaching CSS animations and Sass with a mobile-first approach, but also good practices such as the BEM methodology and the 7-1 Sass folder structure.
        <br/>Though it was not asked, I made a few Sass mixins which were still useful to me in my latest projects!
      </>
    )
  },
  {
    id: 2,
    title: 'GameOn',
    techs: ['Git', 'HTML', 'TypeScript'],
    themes: ['Intro to JavaScript', 'DOM manipulation', 'Input validation'],
    github: 'https://github.com/0ddbird/P4_GameOn_TS',
    githubPage: 'https://0ddbird.github.io/P4_GameOn_TS/',
    diagram: 'https://whimsical.com/p4-gameon-JnY4Bf93Nx96scT1XrZ3vf',
    description: (
      <>
        This project had me to build a form input validation script.
        <br/>Alongside learning fundamentals of programming, such as variables, types, functions, conditional statements or loops, I also had to learn how to interact with the DOM with query selectors, event listeners and APIs provided by the browser (i.e. the Constraint Validation API).
        <br/>I also got the hang of how to modularize my code and wrap reusable code into functions.
        <br/>Though it was not part of my training program, I decided to learn TypeScript on my own. Therefore I re-built this project, and later ones with TS.
      </>
    )
  },
  {
    id: 3,
    title: 'FishEye',
    techs: ['Git', 'HTML', 'Sass', 'JavaScript'],
    themes: ['Dynamic content', 'Design patterns', 'Accessibility'],
    github: 'https://github.com/0ddbird/OC_P6_Fisheye',
    githubPage: 'https://0ddbird.github.io/OC_P6_Fisheye/',
    diagram: 'https://whimsical.com/p6-v4-PtWt93VBERWdH3PrCxM4Ey@3CRerdhrAw8SEozk8bAjSLZn',
    description: (
      <>
        This one was a tough and thrilling project.
        <br />I had to build a dynamic website for photographers&apos; galeries.
        <br />The goal was to make it fully accessible &#40;compliant to the WCAG guidelines&#41;, using semantic HTML elements, aria-labels and tabindexes.
        <br />The site also had to handle an end-to-end keyboard navigation.
        <br />JavaScript-wise, all the content was dynamically populated and based on an URL parameter.
        <br />In order to add a little something nice to this project, I learned to use:
        <ul>
          <li>- HTML templates</li>
          <li>- JavaScript proxies</li>
          <li>- the localStorage and sessionStorage for non-critical data</li>
          <li>- the Intersection Observer API to make lazy loading animations in the galeries</li>
        </ul>
      </>
    )
  },
  {
    id: 4,
    title: 'Les Petits Plats',
    techs: ['Git', 'HTML', 'Sass', 'JavaScript'],
    themes: ['Algorithms', 'Performance benchmarks'],
    github: 'https://github.com/0ddbird/OC_P7_Les_petits_plats',
    githubPage: 'https://0ddbird.github.io/OC_P7_Les_petits_plats/',
    diagram: 'https://whimsical.com/p7-algo-L1NiK2h7DHXpF2PDbbBuiX',
    logigram: 'https://whimsical.com/p7-les-petits-plats-logigramme-W6cBsyYcQSZ8L751F5CXtD',
    description: (
      <>
        <i>What are we having for dinner tonight?</i>
        <br /> Well I&apos;m sure you&apos;ll find out really quick if you take a look at this project.
        The aim was to build a search algorithm for cooking recipes, dealing with multiple criterias &#40;keywords, different types of tags&#41;
        I had to make two versions of the algorithm, one using the <i>functional approach</i>, the other using <i>imperative approach</i>, then benchmark the two versions and understand why one would be more performant.

      </>
    )
  },
  {
    id: 5,
    title: 'Billed',
    techs: ['Git', 'JavaScript', 'Jest'],
    themes: ['Debugging', 'Testing'],
    github: 'https://github.com/0ddbird/OC_P9_Billed',
    githubPage: '',
    diagram: 'https://whimsical.com/p9-billed-front-map-9Cdr8mQDUPCnAtBLs5BkWr',
    description: (
      <>
        For this project, a codebase with a front-end app and a back-end NodeJS server was given.
        <br />First, I had to fix a few bugs identified in <i>GitHub Issues</i>
        <br />Then I had to make unit and integration tests with Jest to reach 90% codebase coverage.
        <br /> Finally I wrote an end-to-end test plan made of 15 possible user scenarii.
        <br />Working on someone else&apos;s codebase was a real blast to me, for I discovered syntax I didn&apos;t know at that time.
        <br /> This also reminded me how code readability is crucial when working on a project.
      </>
    )
  },
  {
    id: 6,
    title: 'Kasa',
    techs: ['Git', 'Sass', 'React', 'TypeScript'],
    themes: ['Intro to React', 'Dynamic Routing'],
    github: 'https://github.com/0ddbird/OC_P11_Kasa',
    githubPage: 'https://0ddbird.github.io/OC_P11_Kasa/',
    description: (
      <>
        For this first React project, I was asked to build an AirBnB-like application, based on Json data.
        <br />The project covered core React topics such as react stateful and stateless components, the React virtual DOM, or React router.
        <br />I chose to make this project with TypeScript to get a grasp on creating nested interfaces, and understand how to properly type props and React DOM Elements.
      </>
    )
  },
  {
    id: 7,
    title: 'SportSee',
    techs: ['Git', 'Sass', 'React', 'TypeScript', 'Recharts'],
    themes: ['Graphs', 'External lib', 'API requests'],
    github: 'https://github.com/0ddbird/OC_P12_Sportsee',
    diagram: 'https://whimsical.com/p12-sportsee-SXM1EPyjwSGJbbSs7gxDFQ',
    description: (
      <>
        In order to build this project, I had to make API requests to a provided back-end and use the Recharts library to make graphs.
        <br />To go further, I was meant to use optional features from Recharts to build custom tooltips or graph legends to comply to the mocks.
        <br />I also had to implement a toggle class to switch between API and mocked data and fill in the JSDoc.
        <br />I chose to build this project with TypeScript to see how using it with a third-party library worked.
      </>
    )
  },
  {
    id: 8,
    title: 'ArgentBank',
    techs: ['Git', 'Sass', 'React', 'Redux'],
    themes: ['API requests', 'Redux store', 'JSDoc'],
    github: 'https://github.com/0ddbird/OC_P13_ArgentBank',
    githubPage: '',
    diagram: 'https://whimsical.com/p13-argentbank-UA4DHcxfiPnT2KLcr4ySxx',
    description: (
      <>
        The main goal of this project was about using Redux to create a global context for a banking application.
        <br/>A NodeJS server was available to handle user creation, login and request user data.
        <br/>I used <i>Redux Toolkit</i> to fetch, store and update user data, and echo the result globally in the app.
        <br/>Nonetheless, I still used props whenever I could, to keep as many stateless components as possible.
        <br/>As I was curious about how session persistency worked, I read articles and documentation about how user session is kept active in case of a page refresh.
        <br/>This led me to learn about XSS and CSRF attacks, and HTTP-only cookies.
        <br/>Finally, I was also asked to edit the API swagger to add new routes to get and patch user transaction details.
      </>
    )
  },
  {
    id: 9,
    title: 'HRNet',
    techs: ['Git', 'Sass', 'React', 'Lighthouse'],
    themes: ['Stateless component design', 'NPM lib publication'],
    githubPage: '',
    github: 'https://github.com/0ddbird/OC_P14_HRNet',
    description: (
      <>
        For this project I was given a jQuery application, made with 4 dependencies:
        <ul>
          <li>- A modal window</li>
          <li>- A custom select</li>
          <li>- A table</li>
          <li>- A date picker</li>
        </ul>
        The brief asked to create a React app, re-build one of these modules as a React component, and use external libraries for the 3 others, then share the component I made as an NPM package.
        <br/> I chose to re-build them 4, as stateless components. Sinced I used the custom <i>select</i> in the <i>table</i> and <i>datepicker</i> components, I decided to share this one and re-import it as an NPM package.
        <br /> You can find it <a href="https://www.npmjs.com/package/react-controlled-select" target="_blank" rel="noopener noreferrer">here</a>.
      </>
    )
  },
  {
    id: 10,
    title: 'React Quizz',
    techs: ['Git', 'Sass', 'React'],
    themes: ['Personal project', 'Quizz', 'Question templates', 'Audio questions'],
    githubPage: 'https://0ddbird.github.io/ReactQuizz/',
    github: 'https://github.com/0ddbird/ReactQuizz',
    description: (
      <>
        This one has a little story behind it!
        <br/>I was starting to learn React and my girlfriend&apos;s birthday was coming.
        <br/>As she loves blind-tests and quizzes, I wanted to test my skills making a modular quizz based on different question templates.
        <br/>So I designed a mock on Figma, and implemented 3 types of questions: <i>true or false</i>, <i>text answer</i> and <i>song guessing</i>, and a coin system for each correct answer.
        <br/>I added a rigged prizewheel that will always stop once on the jackpot, and learned how to render CSS animations from React.
        <br/>Since I was not sure she would do it all at once, I imagined a key generator to save/restore game progression and earned coins.
        <br/>However, the downside to this project lies in its lack of responsivity.
      </>
    )
  },
  {
    id: 11,
    title: 'Tambouille',
    techs: ['Git', 'Sass', 'React', 'TypeScript', 'Node'],
    themes: ['Personal project', 'Search algorithm', 'Recipes suggestion'],
    github: 'https://github.com/0ddbird/tambouille',
    githubPage: '',
    description: (
      <>
        If you ever wondered what you can cook with ingredients you only have, <i>Tambouille</i> is for you.
        <br/>I made this app to learn how to make a NodeJS/Express server, before I was given examples from my training courses.
        <br/>This app gives you access to a list of ingredients available on the market by season, let you fill in the ingredients you have in your fridge, and suggest recipes based on what you have at your disposal only.
      </>
    )
  }
]

export { projects }
