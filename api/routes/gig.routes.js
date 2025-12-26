import express from 'express';
import {Gig} from '../controllers/gig.controller.js';
const router = express.Router();

//create  new gig

router.post('/gigs' , Gig)

export default router;