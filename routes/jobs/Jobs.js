const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /jobs:
 *  get:
 *      summary: Returns the jobs json
 *      tags: [Jobs]
 *      responses:
 *          200:
 *              description: The jobs json
 */

router.get("/", (req, res) => {
    req.app.displaySite("data/WorkHistory.json","Work History", (json) => res.json(json));
});

module.exports = router;