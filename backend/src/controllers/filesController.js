import { ENDPOINTS, headers, BASE_URL } from '../const/CONSTS.js'
import fetch from 'node-fetch'
import { cvToJSON } from '../utils/CsvConverter.js'

/**
 * Get all files from the remote API.
 * If a filename is provided, get the file by filename.
 * @param {string} filename - The filename to search.
 * @returns {Promise} Promise with the response.
 * @throws {Error} Error if the response is not ok.
 */
export const getAllFilesFormatted = async (req, res) => {
  try {
    const { fileName } = req.query

    if (fileName) {
      const fileData = await getFile(fileName)

      if (!fileData) {
        return res.status(404).send({ message: 'File not found' })
      }

      return res.send(fileData)
    }

    const fileNames = await getListFiles()

    let filesData = await Promise.all(
      fileNames.files.map(async (fileName) => {
        const fileData = await getFile(fileName)
        if (fileData && fileData.lines && fileData.lines.length > 0) {
          return fileData
        }
      })
    )
    // Removes Null values
    filesData = filesData.filter(Boolean)

    return res.send(filesData)
  } catch (err) {
    return res.status(500).send({ message: err.message })
  }
}

/**
 * Get all files from the remote API.
 */
export const getListFiles = async (req, res) => {
  try {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.files}`, {
      headers
    })

    if (!response.ok) {
      throw new Error('Response not ok')
    }

    const fileNames = await response.json()

    if (res) {
      return res.send(fileNames)
    }

    return fileNames
  } catch (err) {
    if (res) {
      return res.status(500).send({ message: err.message })
    }
    throw new Error(err.message)
  }
}

/**
 * Get a file by filename from the remote API.
 * @param {string} filename - The filename to search.
 * @returns {Promise} Promise with the response.
 */
export const getFile = async (fileName) => {
  try {
    const response = await fetch(
      `${BASE_URL}${ENDPOINTS.fileName}/${fileName}`,
      {
        headers
      }
    )

    if (!response.ok) {
      return null
    }

    const data = await response.text()
    const jsonData = cvToJSON(fileName, data)
    return jsonData
  } catch (err) {
    console.log(err)
    throw new Error(err.message)
  }
}
