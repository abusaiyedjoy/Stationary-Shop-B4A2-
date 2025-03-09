import { Schema, model } from 'mongoose';
import { TStationeryProduct } from './product.interface';

const productSchema = new Schema<TStationeryProduct>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: [
      'Writing',
      'Office Supplies',
      'Art Supplies',
      'Educational',
      'Technology',
    ],
    required: [true, 'Category is required'],
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

export const StationeryProductModel = model<TStationeryProduct>(
  'StationeryProduct',
  productSchema
);
