import request from 'supertest'
import app from '../../src/app'

describe('GET /api/auth/test/', () => {
  it('responds with /api/auth/test/', (done) => {
    request(app)
      .get('/api/auth/test/')
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body.result).toBe(true)
        done()
      })
  })
})

describe('POST /api/auth/signin/', () => {
  it('responds with /api/auth/signin/', (done) => {
    const email = 'toaonly42@gmail.com'
    const password = '1234'

    request(app)
      .post('/api/auth/signin/')
      .send({ email, password })
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body.token).toBeTruthy()
        done()
      })
  })
})
