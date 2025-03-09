import { TStationeryProduct } from "./product.interface";
import { StationeryProductModel } from "./product.schemaModel";


const createProductIntoDb = async  (product: TStationeryProduct)=>{
    const result = await StationeryProductModel.create(product);
    return result;
};

const getAllProductsIntoDb = async ()=>{
    const result = await StationeryProductModel.find();
    return result;
};

const getSingleProductIntoDb = async (_id: string) => {
    const result = await StationeryProductModel.findOne({_id});
    return result;
};

export const StationeryProductService = {
    createProductIntoDb,
    getAllProductsIntoDb,
    getSingleProductIntoDb,
};