const PORT = process.env.PORT || 9000;
const express = require('express');
const fs = require('fs');

const app = express();

app.get("/", (req, res) => {
    displaySite("data/Index.json", "Index", (json) => res.json(json));
});

app.get("/education", (req, res) => {
    displaySite("data/MyEducation.json", "Education", (json) => res.json(json));
});

app.get("/jobs", (req, res) => {
    displaySite("data/WorkHistory.json","Work History", (json) => res.json(json));
});

app.get("/projects", (req, res) => {
    displaySite("data/Projects.json", "Projects",(json) => res.json(json));
});

app.get("/links", (req, res) => {
    displaySite("data/Links.json", "Links", (json) => res.json(json));
});

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

app.listen(PORT, ()=> console.log("Server running on port " + PORT));