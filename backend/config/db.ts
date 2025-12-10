import mongoose from "mongoose";
import CONSTANTS from "../constants";

const { DB_HOST, DB_PORT, DB_NAME } = CONSTANTS;

async function connectDB() {
  try {
    await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    console.log("mongodb connect success");
  } catch (error) {
    console.log("mongodb connect failed - ", error);
    process.exit(1);
  }
}

export default connectDB;
