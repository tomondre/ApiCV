const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /projects:
 *  get:
 *      summary: Returns the projects json
 *      tags: [Projects]
 *      responses:
 *          200:
 *              description: The projects json
 */

router.get("/", (req, res) => {
    req.app.displaySite("data/Projects.json", "Projects",(json) => res.json(json));
});

module.exports = router;