import express from 'express';
import { deleteUser } from '../controller/user.controller';

const router = express.Router();
router.get('/test' , deleteUser);

export default router;