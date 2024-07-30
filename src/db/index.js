import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `Mongo DB connection successfull !! DB Host: ${connectionInstance.connection.host}`
        );
    } catch (e) {
        console.log(`Cannot connect to the database: ${e}`);
        process.exit(1);
    }
};

export default connectDB;
