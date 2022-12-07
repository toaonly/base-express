import http from 'http'
import path from 'path'
import dotenv from 'dotenv'
import app from '../src/app'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const port = process.env.PORT ?? 3000
const server = http.createServer(app)

server
  .listen(port)
  .on('error', err => console.warn(err))
  .on('listening', () => {
    console.debug(`Listening on port ${port} mode ${process.env.NODE_ENV}`)
  })
