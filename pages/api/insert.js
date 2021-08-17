import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res){
    const { db } = await connectToDatabase();

    const data = req.body;

    const response = await db.collection("roomX").insertOne(data);
    res.json(response)
    
}