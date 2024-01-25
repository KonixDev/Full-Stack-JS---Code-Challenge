// filesRouter.js
import express from 'express'
import {
  getAllFilesFormatted,
  getListFiles
} from '../controllers/filesController.js'

const router = express.Router()

/**
 * @swagger
 * /files/data:
 *
 *   get:
 *     summary: Get specific file data or all files.
 *     description: Returns all files or specific one if specified.
 *     tags:
 *      [Files Controller]
 *     parameters:
 *       - in: query
 *         name: fileName
 *         schema:
 *           type: string
 *         required: false
 *         description: Name of the file to retrieve.
 *     responses:
 *       200:
 *         description: Data of the requested file.
 *         content:
 *           application/json:
 *             example:
 *               - file: test2.csv
 *                 lines:
 *                   - text: "BpDkGcFRpXkhhnrgiB"
 *                     number: 31
 *                     hex: "7a35ba1ca7fc6c7e06c133cbc35b054f"
 *
 *       404:
 *         description: File not found.
 *         content:
 *          application/json:
 *           example:
 *             message: "File not found"
 *       500:
 *         description: Internal server error.
 */
router.get('/data', getAllFilesFormatted)

/**
 * @swagger
 * /files/list:
 *   get:
 *     summary: Get the original list of files.
 *     description: Returns the list of available files.
 *     tags:
 *      [Files Controller]
 *     responses:
 *       200:
 *         description: List of files.
 *         content:
 *          application/json:
 *           example:
 *             files:
 *              - test.csv
 *              - test2.csv
 *              - test3.csv
 *              - test25.csv
 *              - test26.csv
*       500:
 *         description: Internal server error.
 */
router.get('/list', getListFiles)

export default router
