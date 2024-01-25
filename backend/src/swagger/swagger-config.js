import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CSV File API',
      version: '1.0.0',
      description: 'CSV -> JSON API con Express y Node.js',
      contact: {
        name: 'Martín Coll',
        email: 'contacto@martincoll.dev',
        url: 'https://github.com/KonixDev'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000/',
        description: 'Local server'
      },
      {
        url: 'http://localhost:8888/',
        description: 'Live server'
      }
    ]
  },

  apis: ['src/routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
