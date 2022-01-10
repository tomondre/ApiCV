const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /links:
 *  get:
 *      summary: Returns the links json
 *      tags: [Links]
 *      responses:
 *          200:
 *              description: The links json
 */

router.get("/", (req, res) => {
    req.app.displaySite("data/Links.json", "Links", (json) => res.json(json));
});

module.exports = router;