import express from 'express';
import {message} from '../controllers/message.controller.js';
const router = express.Router();

//create  new message

router.post('/messages' , message)

export default router;