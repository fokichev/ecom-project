import express from 'express';
import mongoose from 'mongoose';
import UserModel from './models/User.Model';

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

// Test create route
app.post('/api/user', async (_, res) => {
    try {
        const user = await UserModel.create({
            firstName: "Jane",
            lastName: "Smith",
            email: "janesmith@email.com",
            company: "Oak Tree LTD",
            age: 39,
            address: "15 Oak Avenue",
            city: "Manchester",
            county: "Greater Manchester",
            postcode: "M5 2TY",
            phone: "07887654321",
            createdAt: new Date(),
        });

        console.log("success!");

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
})