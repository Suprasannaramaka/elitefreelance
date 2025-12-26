import express from 'express';
import {conversation}  from '../controllers/conversation.controller.js';
const router = express.Router();

//create  new conversation 

router.post('/conversations' , conversation)

export default router;