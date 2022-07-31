import express from "express";
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
    req.app.displaySite("projects", "Projects",(json) => res.json(json));
});

export default router;