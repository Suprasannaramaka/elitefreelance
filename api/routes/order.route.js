import express from 'express';
import {Order} from '../controllers/order.controller.js';
const router = express.Router();

//create  new order

router.post('/orders' , Order)

export default router;