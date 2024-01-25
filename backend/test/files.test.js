import supertest from 'supertest'
import { expect } from 'chai'
import app from '../src/index.js'


describe('Endpoint Tests', () => {
  it('Debería obtener datos del archivo específico', async () => {
    const response = await supertest(app)
      .get('/files/data?fileName=test1.csv')
      .expect(200)
    expect(response.body).to.have.property('file')
  })

  it('Debería obtener datos de todos los archivos', async () => {
    const response = await supertest(app).get('/files/data').expect(200)
    expect(response.body).to.be.an('array')
  })
})
