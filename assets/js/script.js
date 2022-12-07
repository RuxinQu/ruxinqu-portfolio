const source = document.getElementById('templateHB').innerHTML;
const template = Handlebars.compile(source);

const context = {
    projects: [
        {
            title: "Wei Full",
            img: "./img/project/wei-full-big.png",
            alt: "wei-full",
            page: "https://ruxinqu.github.io/Wei-Full/",
            repo: "https://github.com/RuxinQu/Wei-Full"
        },
        {
            title: "Raining Cats and Dogs",
            img: "./img/project/raining-dogs-big.png",
            alt: "raining-cats-and-dogs",
            page: "https://raining-dogs.herokuapp.com/",
            repo: "https://github.com/RuxinQu/Raining-Cats-and-Dogs"
        },
        {
            title: "My Bolg",
            img: "./img/project/my-blog.png",
            alt: "my-blog",
            page: "https://my-blog-4001.herokuapp.com/",
            repo: "https://github.com/RuxinQu/my-blog"
        },
        {
            title: "Weather Dashboard",
            img: "./img/project/weather-dashboard-big.png",
            alt: "weather-dashboard",
            page: "https://ruxinqu.github.io/weather-dashboard/",
            repo: "https://github.com/RuxinQu/weather-dashboard"
        },
        {
            title: "Note Taker",
            img: "./img/project/note-taker.png",
            alt: "Note-Taker",
            page: "https://note-taker-4001.herokuapp.com/",
            repo: "https://github.com/RuxinQu/note-taker"
        },
        {
            title: "Game Find Your Hat",
            img: "./img/project/game-find-your-hat.png",
            alt: "game-find-your-hat",
            repo: "https://github.com/RuxinQu/game-find-your-hat"
        },
        {
            title: "Readme Generator",
            img: "./img/project/readme-generator.png",
            alt: "readme-generator",
            repo: "https://github.com/RuxinQu/readme-generator"
        },
        {

            title: "Team Profile Generator",
            img: "./img/project/team-profile-gen.png",
            alt: "team-profile-generator",
            repo: "https://github.com/RuxinQu/team-profile-generator"
        },
        {
            title: "E-Commerce-API",
            img: "./img/project/e-commerce-api.png",
            alt: "e-commerce-api",
            repo: "https://github.com/RuxinQu/e-commerce-api"
        },
        {
            title: "Employee Tracker",
            img: "./img/project/employee-tracker.png",
            alt: "employee-tracker",
            repo: "https://github.com/RuxinQu/employee-tracker"
        },
        {
            title: "Work Day Scheduler",
            img: "./img/project/scheduler.png",
            alt: "scheduler",
            page: "https://ruxinqu.github.io/work-day-scheduler/",
            repo: "https://github.com/RuxinQu/work-day-scheduler"
        },
        {
            title: "Code Quiz",
            img: "./img/project/code-quiz-big.png",
            alt: "code-quiz",
            page: "https://ruxinqu.github.io/code-quiz/",
            repo: "https://github.com/RuxinQu/code-quiz"
        },
        {
            title: "Password Generator",
            img: "./img/project/password-generator.png",
            alt: "password-generator",
            page: "https://ruxinqu.github.io/password-generator/",
            repo: "https://github.com/RuxinQu/password-generator"
        },
    ]
};

const compiledHtml = template(context);

const displayGoals = document.getElementById('project-container');
displayGoals.innerHTML = compiledHtml;

