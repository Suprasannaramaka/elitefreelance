import express from 'express';
import {review} from '../controllers/review.controller.js';
const router = express.Router();

//create  new review 

router.post('/reviews' , review)

export default router;