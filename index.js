const PORT = process.env.PORT || 9000;
const express = require('express');
const fs = require('fs');

const app = express();

app.get("/", (req, res) => {
    displaySite("data/Index.json", (json) => res.json(json));
});

app.get("/education", (req, res) => {
    displaySite("data/MyEducation.json", (json) => res.json(json));
});

app.get("/jobs", (req, res) => {
    displaySite("data/WorkHistory.json", (json) => res.json(json));

});

app.get("/projects", (req, res) => {
    displaySite("data/Projects.json", (json) => res.json(json));
});

app.get("/links", (req, res) => {
    displaySite("data/Links.json", (json) => res.json(json));
});

function displaySite(jsonLink, callback) {
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
            let navigation = JSON.parse(navigationData.toString())
            let information = JSON.parse(data.toString());
            callback({information, navigation});
        });
    });
}


app.listen(PORT, ()=> console.log("Server running on port " + PORT));