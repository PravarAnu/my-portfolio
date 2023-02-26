const projects = [
    {
        name: "Personal Portfolio",
        description:
            "Portfolio is a must do project for a web developer to show their skills. Here all my projects are shown which are both solo or group made.",
        techUsed: "HTML, CSS, Javascript, React, NodeJs",
        contribution: "The project is made by myself",
    },
    {
        name: "Keeper App",
        description:
            "This project works like google keep app where you take note with the features of add & delete. This project is fully developed using React.",
        techUsed: "HTML, CSS, Javascript, React, NodeJs",
        contribution: "This project is made by myself",
    },
    {
        name: "TO DO App",
        description:
            "It allows users to manage their daily tasks and you can also make a dedicated tab such as a list for household, fruits & vegetables, etc. This project is connected with MongoDB Atlas for accessibility from any device.",
        techUsed: "HTML, CSS, JavaScript, Express, NodeJs, MongoDB",
        contribution:
            "This project is made by myself. I used mongoose library for ease in use of MongoDB",
    },
    {
        name: "Live News Scraper",
        description:
            "This webpage shows you the latest news headlines from many other news websites at one place.",
        techUsed: "HTML, CSS, Python, Django, BeautifulSoup",
        contribution:
            "I developed the backend part and used the beautiful-soup for parsing headlines.",
    },
    {
        name: "Human Skintone Detector",
        description:
            "This webpage shows you the skintone of human portrait (Fair, Mild, Dark).",
        techUsed: "HTML, CSS, Javascript, Python, Django, Bootstrap, ML",
        contribution: "I worked on the frontend as well as backend part",
    },
    {
        name: "Minesweeper Game",
        description:
            "Minesweeper is a single-player puzzle game. The objective of the game is to clear a rectangular board containing hidden 'mines' or bombs without detonating any of them, with help from clues about the number of neighbouring mines in each field.",
        techUsed: "C++",
        contribution: "All the things are made by myself",
    },
];

const skills = [
    {
        nameOfClass: "prog-lang",
        type: "Programming Language",
        techs: "C++, Python, JavaScript",
    },
    {
        nameOfClass: "web",
        type: "Web Frameworks & Libraries",
        techs: "Bootstrap, Django, React.Js, Node.Js, Express.Js, Mongoose",
    },
    {
        nameOfClass: "database",
        type: "Database Management",
        techs: "SQL, SQlite, MySQL, MongoDB",
    },
    {
        nameOfClass: "tools",
        type: "Tools",
        techs: "Git, Github, Unix Commands",
    },
];

const experience = [
    {
        nameOfClass: "intern",
        heading: "WEB Intern at VERZEO",
        from: "March 2021",
        to: "April 2021",
        work: [
            'Worked on a team project named "Human Skintone Detector"',
            "I worked on the backend part where I did the things related to organizing the web pages and make them fit for the Django.",
        ],
    },
];

const education = [
    {
        nameOfClass: "under-graduate",
        degree: "B.Tech - Computer Science",
        institute: "Bansal Institute of Science & Technology",
        from: "2018",
        to: "2022",
        score: "CGPA: 8.68",
    },
    {
        nameOfClass: "higher-secondary",
        degree: "Higher Secondary",
        institute: "Trident Public School",
        from: "2017",
        to: "2018",
        score: "Percentage: 59.6%",
    },
    {
        nameOfClass: "senior-secondary",
        degree: "Senior Secondary",
        institute: "Sushant Public School",
        from: "2015",
        to: "2016",
        score: "CGPA: 10",
    },
];

const achievements = [
    "Second position in Inter-School Chess Competition among 1200 participants(approx)",
    "Got 5 stars on HackerRank in C++.",
    "Played in state level football team.",
];

const softSkills = ["Problem Solving", "Multitasker", "Self Motivated"];
const interests = ["Coding", "Chess", "Football", "Listening Music"];

const languages = ["English", "Hindi"];

const personalDetails = [
    {
        title: "Name: ",
        value: "Pravar Anu",
    },
    {
        title: "DOB: ",
        value: "29/01/2001",
    },
    {
        title: "Father's Name: ",
        value: "Arvind Kumar",
    },
    {
        title: "Mother's Name: ",
        value: "Nutan Kumari",
    },
    {
        title: "Current Address ",
        value: "Bangalore, Karnataka, INDIA",
    },
];

export {
    experience,
    projects,
    education,
    skills,
    achievements,
    softSkills,
    interests,
    languages,
    personalDetails,
};
