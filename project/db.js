// db.js
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; // Or your MongoDB Atlas URI
const client = new MongoClient(uri);

export async function getProducts() {
  try {
    await client.connect();
    const db = client.db("shopdb"); // database name
    const collection = db.collection("product"); // collection name
    return await collection.find().toArray(); // fetch all products
  } finally {
    await client.close(); // always close connection after use
  }
}
