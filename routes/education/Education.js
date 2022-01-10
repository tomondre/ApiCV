const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /education:
 *  get:
 *      summary: Returns the education json
 *      tags: [Education]
 *      responses:
 *          200:
 *              description: The education json
 */

router.get("/", (req, res) => {
    req.app.displaySite("data/MyEducation.json", "education", (json) => res.json(json));
});

module.exports = router;