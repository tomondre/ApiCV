import express from "express";
import {promises as fs} from "fs";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import fetch from 'node-fetch';

import educationRouter from "./routes/education/Education.js";
import indexRouter from "./routes/index/Index.js";
import jobsRouter from "./routes/jobs/Jobs.js";
import linksRouter from "./routes/links/Links.js";
import projectsRouter from "./routes/projects/Projects.js";

const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || "httxp://localhost:9000/";
const API_URL = process.env.API_URL || "https://api.tomondre.com/";

const app = express();

app.displaySite = displaySite.bind(this);

function getNavigation() {
    let map = new Map([
        ["Index" , ""],
        ["Education" , "education"],
        ["Work Experience" , "workExperience"],
        ["Projects" , "projects"],
        ["Links" , "links"],
    ]);

    let navigation = [];

    map.forEach((value, key)=>{
        navigation.push({
            description: key,
            url: `${HOST}${value}`
        });
    });

    return navigation;
}

async function displaySite(url, title, callback) {
    let content;

    if (url === "") {
        let newVar = await fs.readFile("./data/Index.json");
        content = JSON.parse(newVar.toString());
    } else {
        content = await getContent(url);
    }

    let result = {title, content: content, navigation: getNavigation()};
    callback(result);
}

async function getContent(url) {
    let response = await fetch(`${API_URL}${url}`);
    return response.json();
}

app.use("/", indexRouter);
app.use("/education", educationRouter);
app.use("/workExperience", jobsRouter);
app.use("/links", linksRouter);
app.use("/projects", projectsRouter);

app.listen(PORT, () => console.log("Server running on port " + PORT));


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Portfolio API",
            version: "1.0.0",
            description: "Portfolio API"
        },
        server: [{
            url: "http://api-cv.tomondre.com/"
        }],
    },
    apis: [
        "./routes/index/*.js",
        "./routes/education/*.js",
        "./routes/projects/*.js",
        "./routes/jobs/*.js",
        "./routes/links/*.js",
    ]
};

const specs = swaggerJsDoc(options);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs))