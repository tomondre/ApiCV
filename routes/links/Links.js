import express from "express";
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
    req.app.displaySite("links", "Links", (json) => res.json(json));
});

export default router;