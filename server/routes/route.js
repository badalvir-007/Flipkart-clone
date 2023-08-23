import express from 'express';
import { userSignup } from '../controller/user-constroller.js';


const router = express.Router();


router.post('/signup', userSignup);

export default router;
