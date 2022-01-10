const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /:
 *  get:
 *      summary: Returns the index json
 *      tags: [Index]
 *      responses:
 *          200:
 *              description: The index json
 */

router.get("/", (req, res) => {
    req.app.displaySite("data/Index.json", "Index", (json) => res.json(json));
});


module.exports = router;