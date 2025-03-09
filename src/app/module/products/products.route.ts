import express from 'express';
import { StationaryProductController } from './products.controller';

const router = express.Router();

router.post('/create-product', StationaryProductController.createProduct)

router.get('/', StationaryProductController.getAllProducts);


router.get('/:productId', StationaryProductController.getSingleProduct);



router.delete('/:productId', StationaryProductController.deleteProduct);


router.put("/:Id", StationaryProductController.updateProduct);



export const productRoute = router;