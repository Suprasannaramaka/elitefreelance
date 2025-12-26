import express from 'express';
import user from '../models/user.model.js';

const router = express.Router();
 router.delete(':id' , deleteUser);

 export default router;