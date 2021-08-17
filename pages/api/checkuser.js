import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res){
    const { db } = await connectToDatabase();

    const data = req.body;

    const returnData = await db.collection("users").find({user: data.user, pass: data.pass}).toArray();

    res.json(returnData)
}