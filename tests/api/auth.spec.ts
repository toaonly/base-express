import request from 'supertest'
import app from '../../src/app'

describe('GET /auth/test', () => {
  it('responds with /auth/test', (done) => {
    request(app)
      .get('/auth/test')
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body.result).toBe(true)
        done()
      })
  })
})

describe('POST /auth/signin', () => {
  it('responds with /auth/signin', (done) => {
    const email = 'toaonly42@gmail.com'
    const password = '1234'

    request(app)
      .post('/auth/signin')
      .send({ email, password })
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body.email).toBe(email)
        expect(res.body.password).toBe(password)
        done()
      })
  })
})
