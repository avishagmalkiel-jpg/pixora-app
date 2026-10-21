import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"
const mongoURI = process.env.MONGO_URI;

const connectToMongo = async ()=>{
   try {
      const databaseURI = new URL(mongoURI);
      databaseURI.pathname = `/${DB_NAME}`;
      const connectionInstance = await mongoose.connect(databaseURI.toString());
      console.log(`Connected to mongo !! HOST: ${connectionInstance.connection.host}`);
   } catch (error) {
      console.error("Error connecting with database", error);
      process.exit(1);
   }
}

export default connectToMongo
