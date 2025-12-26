import express from 'express';
import user from '../models/user.model.js';
import {deleteUser} from '../controllers/user.controller.js';

const router = express.Router();
 router.delete(':id', deleteUser);

 export default router;