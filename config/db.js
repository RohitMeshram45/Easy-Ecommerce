import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to the mongodb database");
    } catch (err) {
        console.log(err);
    }
};

export default connectDB;