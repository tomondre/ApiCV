const PORT = process.env.PORT || 9000;
const express = require('express');
const fs = require('fs');
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const educationRouter = require("./routes/education/Education");
const indexRouter = require("./routes/index/Index");
const jobsRouter = require("./routes/jobs/Jobs");
const linksRouter = require("./routes/links/Links");
const projectsRouter = require("./routes/projects/Projects");

app.displaySite = displaySite.bind(this);

function displaySite(jsonLink, t, callback) {
    fs.readFile("data/ApiNavigation.json", (err, navigationData)=>{
        if (err)
        {
            console.error(err);
            return;
        }
        fs.readFile(jsonLink, (err, data)=>{
            if (err)
            {
                console.error(err);
                return;
            }
            let title = t;
            let navigation = JSON.parse(navigationData.toString())
            let content = JSON.parse(data.toString());
            callback({title, content, navigation});
        });
    });
}

app.use("/", indexRouter);
app.use("/education", educationRouter);
app.use("/jobs", jobsRouter);
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