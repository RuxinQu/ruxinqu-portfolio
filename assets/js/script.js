const htmlLogo = "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg";
const jsLogo = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
const nodeLogo = "./img/node-js.svg";
const bootstrapLogo = "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png";
const jqueyLogo = "https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_original_logo_icon_146446.png";
const passportLogo = "https://seeklogo.com/images/P/passport-logo-16D89B2F37-seeklogo.com.png?v=637829618510000000";
const handlebarLogo = "https://handlebarsjs.com/images/handlebars_logo.png";
const sequelizeLogo = "https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png";
const expressLogo = "https://img.icons8.com/ios/512/express-js.png";
const mysqlLogo = "https://www.pngfind.com/pngs/m/74-744138_mysql-logo-png-mysql-transparent-png.png";
const herokuLogo = "https://www.svgrepo.com/show/331424/heroku.svg";
const dotenvLogo = "https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.svg";

const context = {
    projects: [
        {
            title: "Wei Full",
            img: "./img/wei-full-big.png",
            alt: "wei-full",
            icon: [
                { src: "https://bulma.io/assets/Bulma%20Icon.svg" },
                { src: jqueyLogo },
                { src: "https://spoonacular.com/application/frontend/images/logo-simple-framed-green-gradient.svg" },
                { src: "https://developers.google.com/static/maps/images/maps-icon.svg" },

            ],
            page: "https://ruxinqu.github.io/Wei-Full/",
            repo: "https://github.com/RuxinQu/Wei-Full"
        },
        {
            title: "Raining Cats and Dogs",
            img: "./img/raining-dogs-big.png",
            alt: "raining-cats-and-dogs",
            icon: [
                { src: nodeLogo },
                { src: expressLogo },
                { src: handlebarLogo },
                { src: sequelizeLogo },
                { src: mysqlLogo },
                { src: "https://upload.wikimedia.org/wikipedia/commons/d/de/Mocha_logo.svg" },
                { src: "https://brandeps.com/logo-download/C/Chai-logo-vector-01.svg" },
                { src: "https://camo.githubusercontent.com/95f9060552c490befea503dea9b87aa13277c0d4ff0aeb18a870f52df665fed4/68747470733a2f2f7765626472697665722e696f2f6173736574732f696d616765732f726f626f742d33363737373838646436333834396335366161356362336633333262313264352e737667" },
                { src: passportLogo }
            ],
            page: "https://raining-dogs.herokuapp.com/",
            repo: "https://github.com/RuxinQu/Raining-Cats-and-Dogs"
        },
        {
            title: "My Bolg",
            img: "./img/my-blog.png",
            alt: "my-blog",
            icon: [
                { src: nodeLogo },
                { src: expressLogo },
                { src: mysqlLogo },
                { src: bootstrapLogo },
                { src: passportLogo },
                { src: handlebarLogo },
                { src: sequelizeLogo },
                { src: herokuLogo },
                { src: dotenvLogo }
            ],
            page: "https://my-blog-4001.herokuapp.com/",
            repo: "https://github.com/RuxinQu/my-blog"
        },
        {
            title: "Weather Dashboard",
            img: "./img/weather-dashboard-big.png",
            alt: "weather-dashboard",
            icon: [
                { src: bootstrapLogo },
                { src: jqueyLogo },
                { src: "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" },
            ],
            page: "https://ruxinqu.github.io/weather-dashboard/",
            repo: "https://github.com/RuxinQu/weather-dashboard"
        },
        {
            title: "Note Taker",
            img: "./img/note-taker.png",
            alt: "Note-Taker",
            icon: [
                { src: nodeLogo },
                { src: expressLogo },
                { src: herokuLogo },
            ],
            page: "https://note-taker-4001.herokuapp.com/",
            repo: "https://github.com/RuxinQu/note-taker"
        },
        {
            title: "E-Commerce-API",
            img: "./img/e-commerce-api.png",
            alt: "e-commerce-api",
            icon: [
                { src: nodeLogo },
                { src: expressLogo },
                { src: sequelizeLogo },
                { src: mysqlLogo },
                { src: herokuLogo },
                { src: dotenvLogo }
            ],
            repo: "https://github.com/RuxinQu/e-commerce-api"
        },
        {

            title: "Team Profile Generator",
            img: "./img/team-profile-gen.png",
            alt: "team-profile-generator",
            icon: [
                { src: nodeLogo },
                { src: bootstrapLogo },
                { src: "https://raw.githubusercontent.com/SBoudrias/Inquirer.js/master/assets/inquirer_readme.svg?sanitize=true" },
                { src: "https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" }
            ],
            repo: "https://github.com/RuxinQu/team-profile-generator"
        },
        {
            title: "Readme Generator",
            img: "./img/readme-generator.png",
            alt: "readme-generator",
            icon: [
                { src: nodeLogo },
                { src: "https://raw.githubusercontent.com/SBoudrias/Inquirer.js/master/assets/inquirer_readme.svg?sanitize=true" }
            ],
            repo: "https://github.com/RuxinQu/readme-generator"
        },
        {
            title: "Game Find Your Hat",
            img: "./img/game-find-your-hat.png",
            alt: "game-find-your-hat",
            icon: [
                { src: nodeLogo },
            ],
            repo: "https://github.com/RuxinQu/game-find-your-hat"
        },
        {
            title: "Employee Tracker",
            img: "./img/employee-tracker.png",
            alt: "employee-tracker",
            icon: [
                { src: nodeLogo },
                { src: "https://raw.githubusercontent.com/SBoudrias/Inquirer.js/master/assets/inquirer_readme.svg?sanitize=true" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Figlet_W_Roman.svg" }
            ],
            repo: "https://github.com/RuxinQu/employee-tracker"
        },
        {
            title: "Work Day Scheduler",
            img: "./img/scheduler.png",
            alt: "scheduler",
            icon: [
                { src: bootstrapLogo },
                { src: jqueyLogo },
                { src: htmlLogo },
                { src: "https://avatars.githubusercontent.com/u/4129662?v=4&s=1920" }
            ],
            page: "https://ruxinqu.github.io/work-day-scheduler/",
            repo: "https://github.com/RuxinQu/work-day-scheduler"
        },
        {
            title: "Code Quiz",
            img: "./img/code-quiz-big.png",
            alt: "code-quiz",
            icon: [
                { src: jqueyLogo },
                { src: htmlLogo },
                { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
                { src: jsLogo }
            ],
            page: "https://ruxinqu.github.io/code-quiz/",
            repo: "https://github.com/RuxinQu/code-quiz"
        },
        {
            title: "Password Generator",
            img: "./img/password-generator.png",
            alt: "password-generator",
            icon: [
                { src: jsLogo },
                { src: htmlLogo }
            ],
            page: "https://ruxinqu.github.io/password-generator/",
            repo: "https://github.com/RuxinQu/password-generator"
        },
    ]
};
const source = document.getElementById('templateHB').innerHTML;
const template = Handlebars.compile(source);
Handlebars.registerPartial('iconPartial', '<img src={{this.src}} alt="logo">');
const compiledHtml = template(context);

const diaplayProjects = document.getElementById('project-container');
diaplayProjects.innerHTML = compiledHtml;

