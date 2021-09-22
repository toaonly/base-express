import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const secret = <string>process.env.JWT_SECRET

export const verify = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers['Authorization']
  let payload

  try {
    payload = <any>jwt.verify(token, secret)

    res.locals.payload = payload
  } catch (err) {
    res.status(401).json({ err })

    return
  }

  const { email } = payload
  const newToken = generateToken(email)

  res.setHeader('Authorization', newToken)

  next()
}

export const generateToken = (email: string) => {
  const token = jwt.sign({ email }, secret, { expiresIn: '24h' })

  return token
}
