import { Schema, model, Document } from 'mongoose';

const ProductSchema = new Schema<ProductDocument>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String },
    type: { type: String },
    stock: { type: Number },
    createdAt: { type: Date, default: Date.now },
});

export interface Product {
    name: string,
    price: number,
    img?: string, // url 
    type?: string,
    stock?: number,
    createdAt: Date;
}

interface ProductDocument extends Product, Document {}

export default model<ProductDocument>('Product', ProductSchema);