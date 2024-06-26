import express from 'express'
import { userSignup, userLogin } from '../controller/user.controller.js';
import { getProducts, getProductByID } from '../controller/product.controler.js';


const router = express.Router();

router.post('/signup', userSignup)
router.post('/login', userLogin)
router.get('/products', getProducts)
router.get('/product/:id', getProductByID)




export default router