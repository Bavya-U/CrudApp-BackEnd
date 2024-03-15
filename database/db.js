import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const databaseURI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(databaseURI)
        console.log('connected to mongodb database');
    } catch (error) {
        console.log(`failedtoconnect to mongodb database ${error.message}`)
        process.exit(1);
    }

}
export default connectDB;