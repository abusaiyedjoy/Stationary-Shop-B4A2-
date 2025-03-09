import { Request, Response } from 'express';
import { StationeryProductService } from './products.service';
import StationeryProductValidationSchema from './zodValidation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product;
    const zodProduct = StationeryProductValidationSchema.parse(product);
    const result = await StationeryProductService.createProductIntoDb(zodProduct);
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
    const {searchTerm} = req.query;
    const result = await StationeryProductService.getAllProductsIntoDb(searchTerm as string || "");
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { Id } = req.params;
    const updateData = req.body;
    const validationResult = StationeryProductValidationSchema.partial().safeParse(updateData);
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationResult.error.format(),
      });
    }
    const updatedproduct = await StationeryProductService.updateProductIntoDb(Id, validationResult?.data);
    
    if (!updatedproduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedproduct,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Product update failed",
      error: error.message,
    });
  }
};


const deleteProduct = async (req: Request, res: Response)=>{
  try{
    const {productId}= req.params;
    const result = await StationeryProductService.deleteProductFormDb(productId);
    res.status(200).json({
      success: true,
      message: "Product Deleted Successfuly",
      data: result
    })
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
  deleteProduct,
  updateProduct
};
