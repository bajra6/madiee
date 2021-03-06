import { connectToDatabase } from "../../lib/mongodb"

export default async function handler(req, res){

    const { db } = await connectToDatabase();

    const data = await db.collection(req.body.room).find({}).toArray();

    res.json(data)
}