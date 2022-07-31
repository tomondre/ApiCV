import express from "express";

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
    req.app.displaySite("educations", "Education", (json) => res.json(json));
});

export default router;