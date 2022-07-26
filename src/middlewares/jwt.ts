import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET as string

export const verify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['Authorization'] as string
  let payload

  try {
    payload = jwt.verify(token, secret) as any

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
