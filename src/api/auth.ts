import { Request, Response, Router } from 'express'
import { verify, generateToken } from '../middlewares/jwt'

const router = Router()

router.get('/test', (req, res) => {
  res
    .status(200)
    .json({ result: true })
})

router.post('/signin', (req, res) => {
  const { email, password } = req.body

  res
    .status(200)
    .json({ token: generateToken(email) })
})

router.get('/:id', [verify], (req: Request, res: Response) => {
  res.status(200)
    .json({
      id: req.params.id
    })
})

export default router
