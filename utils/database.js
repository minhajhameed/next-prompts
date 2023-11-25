import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MongoDb is Already Connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("mongoDB Connected");
    } catch (error) {
        console.log(error);
    }
}