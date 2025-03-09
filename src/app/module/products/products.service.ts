import { TStationeryProduct } from "./product.interface";
import { StationeryProductModel } from "./product.schemaModel";


const createProductIntoDb = async  (product: TStationeryProduct)=>{
    const result = await StationeryProductModel.create(product);
    return result;
};

const getAllProductsIntoDb = async (searchTerm : string)=>{
    let filter = {};

    if (searchTerm) {
        filter = {
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { brand: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
            ],
        };
    }

  const result = await StationeryProductModel.find(filter); 
  return result;
};

const getSingleProductIntoDb = async (_id: string) => {
    const result = await StationeryProductModel.findOne({_id});
    return result;
};


const updateProductIntoDb = async (_id: string, updateData: Partial<TStationeryProduct>)=>{
    const result = await StationeryProductModel.updateOne({_id}, { $set: updateData }, { new: true, runValidators: true } );
    return result;
}


const deleteProductFormDb = async (_id: string)=>{
    const result = await StationeryProductModel.deleteOne({_id});
    return result;
};

export const StationeryProductService = {
    createProductIntoDb,
    getAllProductsIntoDb,
    getSingleProductIntoDb,
    deleteProductFormDb,
    updateProductIntoDb
};