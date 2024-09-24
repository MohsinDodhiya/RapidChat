import express, { Router } from 'express'
import { isAuthenticate } from '../middleware/verifyToken.js'
import { getUserForSlider } from '../controller/user.controller.js'

const router = express.Router()

router.get('/', isAuthenticate, getUserForSlider)

export default router