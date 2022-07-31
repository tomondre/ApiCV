import express from "express";
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
    req.app.displaySite("", "Index", (json) => res.json(json));
});


export default router;