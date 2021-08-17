import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res){
    const { db } = await connectToDatabase();

    const data = req.body;

    const validate = await db.collection("users").find({user: data.user, pass: data.pass}).toArray();

    if (validate.length==0){
        const response = await db.collection("users").insertOne(data);
        res.json(response)
    } else {
        res.json("user exists")
    }
}