import express from 'express'
import chatController from '../controllers/chatController.js'

const router = express.Router()

router.route('/chat').post(chatController)

export default router