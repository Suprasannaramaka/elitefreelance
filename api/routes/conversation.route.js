import express from 'express';
import {Conversation}  from '../controllers/conversation.controller.js';
const router = express.Router();

//create  new conversation 

router.post('/conversations' , Conversation)

export default router;