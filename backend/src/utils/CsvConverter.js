/**
 * This function converts a unique CSV string into an array of JSON objects.
 * @param {string} csvString - CSV string to be converted.
 * @returns {Array} Array of objects.
 */
export const cvToJSON = (fileReqName, csvString) => {
  try {
    const linesSplitted = csvString.split('\n')
    const headers = linesSplitted[0].split(',')

    let fileName = ''
    const lines = linesSplitted.slice(1).map((line) => {
      let values = line.split(',')

      // Remove values that are empty
      values = values.filter((value) => value !== '')

      /** Check if line has all headers data.
       * if not, skip line
       */
      if (values.length !== headers.length) {
        // Skip line
        return
      }

      const lineObj = {}
      headers.forEach((header, index) => {
        if (header !== 'file') {
          lineObj[header] = values[index]
        } else {
          fileName = values[index]
        }
      })
      return lineObj
    })

    const result = {
      file: fileName || fileReqName,
      lines: lines.filter(Boolean)
    }

    return result
  } catch (err) {
    console.error(err)
    return {}
  }
}
