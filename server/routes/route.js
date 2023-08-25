import express from 'express';
import { userSignup , userLogin  , getProducts} from '../controller/user-constroller.js';


const router = express.Router();


router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products' , getProducts);

export default router;
