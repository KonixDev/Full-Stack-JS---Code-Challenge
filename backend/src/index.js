import express from 'express'
import cors from 'cors'
import { API_PORT } from './const/CONSTS.js'
import filesRouter from './routes/filesRouter.js'
import { serveSwaggerUI, setupSwaggerUI } from './swagger/swagger-setup.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/files', filesRouter)
app.use('/api-docs', serveSwaggerUI)
app.get('/api-docs', setupSwaggerUI)

app.listen(API_PORT, () => {
  console.log(`Server running on port ${API_PORT}`)
})

export default app
