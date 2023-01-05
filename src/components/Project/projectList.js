const projects = [
    {
        articleClass: "",
        class: "text",
        heading: "Portfolio",
        member: "solo",
        contribution: "The whole project is made by me",
        description: "Portfolio is a must do project for a web developer to show their skills. Here all my projects are shown which are both solo or group made.",
        projectLink: "https://github.com/PravarAnu/my-portfolio",
        liveLink: "",
        technology: ["HTML", "CSS", "Javascript", "React", "NodeJS"],
        isLive: true,
        imgSrc: "./images/portfolio.jpg",
        imgAlt: "Screenshot of Live News Web Scraper"
    },
    {
        articleClass: "reverse",
        class: "text",
        heading: "Live News Web Scraper",
        member: "solo",
        contribution: "I developed the backend part and used the beautiful-soup library for parsing the webpage.",
        description: "This webpage parse the latest headlines from other news sources and show them here. This project is developed in group during the final year of my college",
        projectLink: "https://github.com/PravarAnu/Live-News-Scraper",
        liveLink: "",
        technology: ["HTML", "CSS", "Bootstrap","Python","Django"],
        isLive: false,
        imgSrc: "./images/scraper.jpg",
        imgAlt: "Screenshot of Live News Web Scraper"
    },
    {
        articleClass:"",
        class:"text",
        heading:"Human Skintone Detector",
        member:"team",
        contribution: "I developed the backend part and implemented the beautiful-soup in the webpage.",
        description:"This is a group project which is developed during my internship at Verzeo. As the name suggests the project do the same thing (i.e If you give an image of a person then the web tells you the skintone of that person). There are three categories of skintone 'Fair', 'Mild', 'Dark'",
        liveLink:"",
        projectLink:"https://frontendmasters.github.io/grid-flexbox-v2/",
        technology:["HTML", "CSS", "Django", "Python", "SQLite"],
        isLive:false,
        imgSrc:"./images/skintone.jpg",
        imgAlt:"Screenshot of Human Skintone Detector"
    },
    {
        articleClass:"",
        class:"text",
        heading:"Minesweeper Game",
        member:"solo",
        contribution: "This project is made by myself",
        description:"Minesweeper is a single-player puzzle game. The objective of the game is to clear a rectangular board containing hidden 'mines' or bombs without detonating any of them, with help from clues about the number of neighbouring mines in each field.",
        liveLink:"",
        projectLink:"https://github.com/PravarAnu/Minesweeper",
        technology:["CPP"],
        isLive:false,
        imgSrc:"./images/minesweeper.jpg",
        imgAlt:"Screenshot of Human Skintone Detector"
    },
];

export default projects;