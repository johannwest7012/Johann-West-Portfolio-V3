import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    projecttestimage,
    backicon,
    githubicon,
    pythonlogo,
    reactlogosvg,
    gsaplogo,
    sasslogo,
    sqllogo,
    vuelogo,
    netlogo,
    awslogo,
    csslogo,
    agilelogo,
    cpluspluslogo,
    airtablelogo,
    chalkline, 
    juni,
    vandy,
    download,
    mongologo
  } from "./assets";
  


const experiences = [
    {
      title: "Python Programming Instrutor",
      company_name: "Juni",
      icon: juni,
      iconBg: "white",
      date: "January 2021 - January 2022",
      points: [
        "Provided instruction to 20+ students weekly in OOP, algorithms, and game development courses.",
        "Prepared student and class specific learning materials and conducted regular progress assessments.",
        "Leveraged knowledge in Python, NumPy, Pandas, and Algorithms."
      ],
    },
    {
      title: "Software Developer Internship I",
      company_name: "Chalkline",
      icon: chalkline,
      iconBg: "white",
      date: "Sept 2022 - March 2023",
      points: [
        "Introduced an automated system for managing transactional email logic flow, eliminating approximately 10 person-hours by automating an average of 500 outgoing emails weekly.",
        "Developed user interface with CRUD capabilities allowing internal employees to efficiently manage states related to users and user transactions of over 1,400,000 unique user instances.",
        "Leveraged knowledge in React.js/JavaScript, PostgreSQL, Airtable, Agile, Bitbucket/Jira"
      ],
    },
    {
      title: "Software Developer Internship II",
      company_name: "Chalkline",
      icon: chalkline,
      iconBg: "white",
      date: "May 2023 - August 2023",
      points: [
        "Upgraded .NET project dependencies from .NET 2.0 to .NET 8.0 to ensure compatibility with modern technologies while improving application performance.",
        "Revamped frontend design and structure using Vue.js, adhering to the MVC design patter. Replaced all views and controllers to achieve a modern and user-friendly interface.",
        "Developed 10+ dynamic views that allowed B2B clients to access their secure data and analytics, providing valuable business intelligence.",
        "Leveraged knowledge in Git, .NET/C#, Vue.js, PostgreSQL, AWS, Bitbucket/Jira, Agile, and MVC pattern.",
      ],
    },
    {
      title: "Undergraduate Computer Science Research",
      company_name: "Vanderbilt",
      icon: vandy,
      iconBg: "white",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developed Quality Adjusted Life Years computation framwork and full stack software application, utilizing a innovative LLM based approach",
        "Explored and defined techniques for applying data governance on inconsistently sourced data.",
      ],
    },
   
  ];

const test_project = {
  name: "CreateX", 
  category: "Full Stack Development", 
  client: "Personal", 
  technologies: "Django, Python, Postgresql, Javascript, React", 
  description: "This is a description of the project bla blah", 
  heroimg: projecttestimage,
  github: true,
  github_link: "https://www.github.com",
  live: true, 
  live_link: "https://www.google.com",
  image_list: [carrent, jobit, tripguide],
}

const test_skill = {
  title: "Python",
  text: "- 2 years experience more text habakjg haweh  jkhawe",
  logo: pythonlogo,
}

const skills = [
  {
    title: "Python",
    logo: pythonlogo,
    subtitle: "5 years academic experience", 
    bullets: [
      "- Full stack Django, REST API experience",
      "- Technical expertise with Pandas, Numpy",
      ["- CreateX Project", "https://github.com/johannwest7012/CreateXStaging"]
    ]
  },
  {
    title: "React.js", 
    logo: reactlogosvg,
    subtitle: "1 year professional experience",
    bullets: [
      "- Next.js preference",
      "- Professional frontend dev experience",
      ["- Portfolio Website", "https://github.com/johannwest7012"]
    ]
  }, 
  {
    title: "SQL", 
    logo: sqllogo,
    subtitle: "1 year professional experience",
    bullets: [
      "- Proficient with PostgreSQL, MySQL",
      "- Multiple projects with SQL databases",
      ["- CreateX Project", "https://github.com/johannwest7012/CreateXStaging"]
    ]
  }, 
  {
    title: "Vue.js", 
    logo: vuelogo,
    subtitle: "1 year professional experience",
    bullets: [
      "- Developed scalable web app UI with Vue.js template capabilities",
      "- Professional frontend dev experience",
      ["- BettorAnalytics project", "https://github.com/johannwest7012"]
    ]
  }, 
  {
    title: "C# & .NET", 
    logo: netlogo,
    subtitle: "1 year professional experience",
    bullets: [
      "- Professional experience developing .NET web apps",
      "- Proficent with MVC framework and .NET Core",
      ["- BettorAnalytics Project", "https://github.com/johannwest7012"]
    ]
  },
  {
    title: "C++", 
    logo: cpluspluslogo,
    subtitle: "3 years academic experience",
    bullets: [
      "- Proficient with C++ OOP concepts",
      "- Practiced with programming design patterns in C++"
    ]
  },  {
    title: "Mongo", 
    logo: mongologo,
    subtitle: "1 year personal experience",
    bullets: [
      "- Experience paired with Express.js",
      "- Multiple projects with Mongo Atlas DBs",
      ["- SafeRoute Project", "https://github.com/johannwest7012/"]
    ]
  }, {
    title: "AWS", 
    logo: awslogo,
    subtitle: "1 year professional experience",
    bullets: [
      "- Experience managing and deploying AWS EC2 instances",
      "- Experience working with RDS and S3 buckets",
      ["- CreateX project", "https://github.com/johannwest7012"]
    ]
  }, 
  {
    title: "CSS", 
    logo: csslogo,
    subtitle: "1 year professional experience",
    bullets: [
      "- Proficient with CSS utilized with a multitude of projects",
      "- CSSS3, SASS, Tailwind experience",
      ["- Portfolio Website", "https://github.com/johannwest7012"]
    ]
  }, 
  {
    title: "Airtable", 
    logo: airtablelogo,
    subtitle: "1 year professional experience",
    bullets: [
      "- Designed production Airtable DB system for client",
      "- Managed CRM operations for client"    ]
  }, 
  {
    title: "Agile", 
    logo: agilelogo,
    subtitle: "1 year professional experience",
    bullets: [
      "- Experience working in Agile environment",
      "- Knowledge of Agile principles and practices",
    ]
  }, 
]

export { 
  download, 
  reactlogosvg, 
  gsaplogo, 
  sasslogo, 
  skills, 
  test_skill, 
  experiences,
  test_project, 
  backicon, 
  githubicon};
  