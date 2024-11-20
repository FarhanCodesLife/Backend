import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error("MONGO_URI is not defined in the environment variables.");
      process.exit(1);
    }

    console.log("Connecting to MongoDB...");
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}practice`
    );

    console.log(
      `\nMongoDB connected! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
