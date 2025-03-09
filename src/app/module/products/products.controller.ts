import { Request, Response } from 'express';
import { StationeryProductService } from './products.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product;
    const result = await StationeryProductService.createProductIntoDb(product);
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product creation failed',
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await StationeryProductService.getAllProductsIntoDb();
    res.status(200).json({
      success: true,
      message: 'Get All Products successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Get All Products failed',
      error: error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const {productId} = req.params;
    const result = await StationeryProductService.getSingleProductIntoDb(productId);
    res.status(200).json({
      success: true,
      message: 'Get Single Product successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Get Single Product failed',
      error: error,
    });
  }
};

export const StationaryProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
