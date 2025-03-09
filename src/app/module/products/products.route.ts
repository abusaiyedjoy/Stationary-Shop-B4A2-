import express from 'express';
import { StationaryProductController } from './products.controller';

const router = express.Router();

router.post('/create-product', StationaryProductController.createProduct)

router.get('/', StationaryProductController.getAllProducts);


router.get('/:productId', StationaryProductController.getSingleProduct);


export const productRoute = router;