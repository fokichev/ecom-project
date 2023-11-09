import express from 'express';
import mongoose from 'mongoose';
import UserModel from './models/User.Model';
import ProductModel from './models/Product.Model';

export const app = express();

// MongoDB connection
const mongooseUrl = "mongodb://127.0.0.1:27017/ecom-project";
mongoose.connect(mongooseUrl, {});

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
	console.log("db connected");
});

// Test get route
app.get('/api/test', (_, res) => 
    res.json({ greeting: "Hello" }
))

// Get products
app.get('/api/products', async (_, res) => {
    try {
        const products = await ProductModel.find({});

        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
})

// Create products
app.post('/api/product', async (_, res) => {
    try {
        const user = await ProductModel.create({
            name: "Test Product",
            price: 10,
            img: "test-img.jpg",
            type: "Prints",
            stock: 10
        });

        console.log("success!");

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
})