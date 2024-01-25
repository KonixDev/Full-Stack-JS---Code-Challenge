import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger-config.js'

export const serveSwaggerUI = swaggerUi.serve
export const setupSwaggerUI = swaggerUi.setup(swaggerSpec, { explorer: true })
