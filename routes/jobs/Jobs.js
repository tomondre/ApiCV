import express from "express";
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
    req.app.displaySite("workExperiences","Work Experience", (json) => res.json(json));
});

export default router;