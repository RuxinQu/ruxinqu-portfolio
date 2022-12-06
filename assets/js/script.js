const source = document.getElementById('templateHB').innerHTML;
const template = Handlebars.compile(source);

const context = {
    projects: [
        {
            title: "Wei Full",
            img: "./img/wei-full-big.png",
            alt: "wei-full",
            page: "https://ruxinqu.github.io/Wei-Full/",
            repo: "https://github.com/RuxinQu/Wei-Full"
        },
        {
            title: "Raining Cats and Dogs",
            img: "./img/raining-dogs-big.png",
            alt: "raining-cats-and-dogs",
            page: "https://raining-dogs.herokuapp.com/",
            repo: "https://github.com/RuxinQu/Raining-Cats-and-Dogs"
        },
        {
            title: "My Bolg",
            img: "./img/my-blog.png",
            alt: "my-blog",
            page: "https://my-blog-4001.herokuapp.com/",
            repo: "https://github.com/RuxinQu/my-blog"
        },
        {
            title: "Weather Dashboard",
            img: "./img/weather-dashboard-big.png",
            alt: "weather-dashboard",
            page: "https://ruxinqu.github.io/weather-dashboard/",
            repo: "https://github.com/RuxinQu/weather-dashboard"
        },
        {
            title: "Note Taker",
            img: "./img/note-taker.png",
            alt: "Note-Taker",
            page: "https://note-taker-4001.herokuapp.com/",
            repo: "https://github.com/RuxinQu/note-taker"
        },
        {
            title: "Readme Generator",
            img: "./img/readme-generator.png",
            alt: "readme-generator",
            repo: "https://github.com/RuxinQu/readme-generator"
        },
        {

            title: "Team Profile Generator",
            img: "./img/team-profile-gen.png",
            alt: "team-profile-generator",
            repo: "https://github.com/RuxinQu/team-profile-generator"
        },
        {
            title: "E-Commerce-API",
            img: "./img/e-commerce-api.png",
            alt: "e-commerce-api",
            repo: "https://github.com/RuxinQu/e-commerce-api"
        },
        {
            title: "Employee Tracker",
            img: "./img/employee-tracker.png",
            alt: "employee-tracker",
            repo: "https://github.com/RuxinQu/employee-tracker"
        },
        {
            title: "Work Day Scheduler",
            img: "./img/scheduler.png",
            alt: "scheduler",
            page: "https://ruxinqu.github.io/work-day-scheduler/",
            repo: "https://github.com/RuxinQu/work-day-scheduler"
        },
        {
            title: "Code Quiz",
            img: "./img/code-quiz-big.png",
            alt: "code-quiz",
            page: "https://ruxinqu.github.io/code-quiz/",
            repo: "https://github.com/RuxinQu/code-quiz"
        },
        {
            title: "Password Generator",
            img: "./img/password-generator.png",
            alt: "password-generator",
            page: "https://ruxinqu.github.io/password-generator/",
            repo: "https://github.com/RuxinQu/password-generator"
        },
    ]
};

const compiledHtml = template(context);

const displayGoals = document.getElementById('project-container');
displayGoals.innerHTML = compiledHtml;
