import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.ATLAS_URI;  
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

const connectDb = async () => {
  if (db) return db; 

  try {
    const conn = await client.connect();
    console.log('Connected to MongoDB!');
    db = conn.db("sample_training");  
    return db;
  } catch (e) {
    console.error('Error connecting to the database:', e);
    throw e;  
  }
};

// Make `db` the default export
export default connectDb;