
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
    mongologo,
    creatextitle,
    cxdemo1,
    cxdemo2,
    cxdemo3,
    cxdemo4,
    batitle,
    bademo1,
    bademo2,
    bademo3,
    bademo4,
    saferoutetitle,
    saferoutedemo1,
    saferoutedemo2,
    qalytitle,
    qalydemo1,
    forwardicon
} from "./assets";

// Constants



const projects = [
    {
        id: "1",
        name: "BettorAnalytics",
        category: "Full Stack Development",
        client: "Chalkline - Professional",
        technologies: ".NET/C#, Vue.js, PostgreSQL, Bitbucket",
        description: `BettorAnalytics is a CRUD and business analytics application, 
                      used by Chalkline's over 200 B2B clients. BettorAnalytics is 
                      data focused, and provides Chalkline clients with the capability to view condensed as 
                      well as in-depth data views of the performance of their client specific Chalkline
                      game and player database, all with a variety of provided data filtering and 
                      sorting functionalites. 
                      Additionally, clients are provided various CRUD tools that allow them to 
                      provide additional data fields that might benefit their business performance, 
                      as well as alter certain exisitng data points within their Chalkline managed database.
                      All of this powered by a .NET backend system, with client specific data being 
                      protected by rigorous security measures to ensure client specifc data stays 
                      accessible only to the appropriate Chalkline clients.
                      Private data has been redacted in the provided media.`,
        heroimg: batitle,
        background: "linear-gradient(to right, #ffffff, #4C0FFE)",
        github: false,
        github_link: "",
        live: false,
        live_link: "",
        video_id: "FTCQUhAD9FA",
        image_list: [
            { image: bademo1, caption: `Dashboard - Comprehensive overview of client data providing accessible but informative metrics.` },
            { image: bademo2, caption: `Example of Table View Analytics Report - BettorAnalytics includes a total of 10 table view analytics reports that clients can view as well as customize with their own filtering and sorting parameters. Each row contains fields that are expandable into further views. Clients can also download any report.` },
            { image: bademo3, caption: `Loyalty Number Upload Tool - A common use case for clients is integrating their loyalty programs into their Chalkline database. The Loyalty Number Upload Tool makes this process simple, as users can upload a csv file containing the pertinent data, and the tool will locate and update the appropiate data points.` },
            { image: bademo4, caption: `Optimove SFTP Upload Tool - Chalkline provides a routine SFTP upload of various data reports to the third party Optimove platform. This tool provides users with access to customizing their own SFTP server parameters and Chalkline SFTP upload settings with ease.` },
           
        ],
    },
    {
        id: "2",
        name: "CreateX",
        category: "Full Stack Development",
        client: "Personal",
        technologies: "Django/Python, PostgreSQL, React.js, AWS RDS, AWS S3",
        description: `CreateX is a content-creator themed, virtual-asset, exchange-market application hosted on Heroku 
                      and built with Django, React.js, and PostgreSQL. 
                      
                      CreateX was developed with 
                      the intention of mimicking the technical process of an 
                      exchange-market platform, equipped to react to free market forces similarly
                      to real life exchange markets such as the NYSE and various cryptocurrency platforms. 
                      
                      CreateX was developed as a personal project to improve my skills with both Django and React.js. All assets
                      and financial values are pseudo.`,
        heroimg: creatextitle,
        background: "linear-gradient(to right, #ffffff, #C90B78)",
        github: true,
        github_link: "https://github.com/johannwest7012/CreateX",
        live: true,
        live_link: "https://github.com/johannwest7012/CreateX",
        video_id: "f_N2vmV1rPQ",
        image_list: [
            { image: cxdemo1, caption: `Home Page - Introducing the user to the platform` },
            { image: cxdemo2, caption: `Profile Page - Manage your profile and view your order history` },
            { image: cxdemo4, caption: `Assets/Creators Page - View the available assets/creators on the platform` },
            { image: cxdemo3, caption: `Buy Sell Page - Clicking on an asset/creator will take you to this page, 
                                        where you can specify quantity, and perform a buy or sell action which 
                                        will affect the price of the asset dependent on a collection of parameters` },
           
        ],
    },
    {
        id: "3",
        name: "SafeRoute",
        category: "Full Stack Development",
        client: "Personal",
        technologies: "Express.js, React.js, Mongo DB",
        description: `SafeRoute is a webapp that allows users to put in their travel iterary and receive relevant information regarding safety and personal freedoms of the countries they might want to travel to, all with an intuitive UI.

                      SafeRoute makes it easy to stay aware, giving the user the intel needed to craft their next journey on their terms, safely.
                      
                      My inspiration for building SafeRoute was to make it easy for people to stay informed to make the best decisions possible when traveling. Previously, while there are many great resources to research safety and personal freedoms when travelling abroad, I have always found them to lack any sort of intuitive user interface to present the data. In fact the data source SafeRoute utilizes, the CATO Human Freedom Index, is only available as an Excel spreadsheet, JSON file, or PDF download. All of which are cumbersome for end point users, especially in the modern day.`,
        heroimg: saferoutetitle,
        background: "linear-gradient(to right, #ffffff, #CA9C07)",
        github: true,
        github_link: "https://github.com/johannwest7012/SafeRoute",
        live: true,
        live_link: "https://github.com/johannwest7012/SafeRoute",
        video_id: "rMgzdVeFnZ8",
        image_list: [
            { image: saferoutedemo2, caption: `Landing Page - Introducing the user to SafeRoute.` },
            { image: saferoutedemo1, caption: `Main Page - Here a user can query a specific country, and select it to add it to their travel iterary.` },
           
        ],
    },
    {
        id: "4",
        name: "QALY'S Computation Application",
        category: "Full Stack Development",
        client: "CS Research (In Progress)",
        technologies: "Django/Python, React.js, PostgreSQL",
        description: `QalyCount is a project credited for Undergraduate Computer Science research at Vanderbilt University, under 
                    the supervision of the Vanderbilt School of Engineering and Dr. Vikash Singh.
                    QalyCount intends to provide a Quality Adjusted Life Years computation 
                    framework and full stack software application, utilizing a innovative LLM based approach in order 
                    to create a practically usable QALY metric, and QALY computation
                    system based on that metric as well as a collection of user-provided parameters. QalyCount 
                    utilizes large language models in order to bring practicality and scalability to measuring cost to benefit ratios of altruistic efforts.
                    
                   `,
        heroimg: qalytitle,
        background: "linear-gradient(to right, #ffffff, #5BF94B)",
        github: false,
        github_link: "",
        live: false,
        live_link: "",
        image_list: [ { image: qalydemo1, caption: `QalyCount is currently under development` },],
    },
];

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
            "Leveraged knowledge in Python, NumPy, Pandas, and Algorithms.",
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
            "Leveraged knowledge in React.js/JavaScript, PostgreSQL, Airtable, Agile, Bitbucket/Jira",
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
            "Developed Quality Adjusted Life Years computation framework and full stack software application, utilizing a innovative LLM based approach",
            "Explored and defined techniques for applying data governance on inconsistently sourced data.",
        ],
    },
];

const test_skill = {
    title: "Python",
    text: "- 2 years experience more text habakjg haweh  jkhawe",
    logo: pythonlogo,
};

const skills = [
    {
        title: "Python",
        logo: pythonlogo,
        subtitle: "5 years academic experience",
        bullets: [
            "- Full stack Django, REST API experience",
            "- Technical expertise with Pandas, Numpy",
            ["- CreateX Project", "https://github.com/johannwest7012/CreateXStaging"],
        ],
    },
    {
        title: "React.js",
        logo: reactlogosvg,
        subtitle: "1 year professional experience",
        bullets: [
            "- Next.js preference",
            "- Professional frontend dev experience",
            ["- Portfolio Website", "https://github.com/johannwest7012"],
        ],
    },
    {
        title: "SQL",
        logo: sqllogo,
        subtitle: "1 year professional experience",
        bullets: [
            "- Proficient with PostgreSQL, MySQL",
            "- Multiple projects with SQL databases",
            ["- CreateX Project", "https://github.com/johannwest7012/CreateXStaging"],
        ],
    },
    {
        title: "Vue.js",
        logo: vuelogo,
        subtitle: "1 year professional experience",
        bullets: [
            "- Developed scalable web app UI with Vue.js template capabilities",
            "- Professional frontend dev experience",
            ["- BettorAnalytics project", "https://github.com/johannwest7012"],
        ],
    },
    {
        title: "C# & .NET",
        logo: netlogo,
        subtitle: "1 year professional experience",
        bullets: [
            "- Professional experience developing .NET web apps",
            "- Proficent with MVC framework and .NET Core",
            ["- BettorAnalytics Project", "https://github.com/johannwest7012"],
        ],
    },
    {
        title: "C++",
        logo: cpluspluslogo,
        subtitle: "3 years academic experience",
        bullets: [
            "- Proficient with C++ OOP concepts",
            "- Practiced with programming design patterns in C++",
        ],
    },
    {
        title: "Mongo",
        logo: mongologo,
        subtitle: "1 year personal experience",
        bullets: [
            "- Experience paired with Express.js",
            "- Multiple projects with Mongo Atlas DBs",
            ["- SafeRoute Project", "https://github.com/johannwest7012/"],
        ],
    },
    {
        title: "AWS",
        logo: awslogo,
        subtitle: "1 year professional experience",
        bullets: [
            "- Experience managing and deploying AWS EC2 instances",
            "- Experience working with RDS and S3 buckets",
            ["- CreateX project", "https://github.com/johannwest7012"],
        ],
    },
    {
        title: "CSS",
        logo: csslogo,
        subtitle: "1 year professional experience",
        bullets: [
            "- Proficient with CSS utilized with a multitude of projects",
            "- CSSS3, SASS, Tailwind experience",
            ["- Portfolio Website", "https://github.com/johannwest7012"],
        ],
    },
    {
        title: "Airtable",
        logo: airtablelogo,
        subtitle: "1 year professional experience",
        bullets: [
            "- Designed production Airtable DB system for client",
            "- Managed CRM operations for client",
        ],
    },
    {
        title: "Agile",
        logo: agilelogo,
        subtitle: "1 year professional experience",
        bullets: [
            "- Experience working in Agile environment",
            "- Knowledge of Agile principles and practices",
        ],
    },
];

export {
    download,
    reactlogosvg,
    gsaplogo,
    sasslogo,
    skills,
    test_skill,
    experiences,
    projects,
    backicon,
    githubicon,
    forwardicon,
};
