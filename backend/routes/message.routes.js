import express from 'express';
import { sendMessage, getMessages } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/:id', protectRoute, getMessages);   //This is used to get the messages of current user and the id's user.
router.post('/send/:id', protectRoute, sendMessage);

export default router;