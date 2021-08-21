import { connectToDatabase } from "../../lib/mongodb";
var ObjectId = require('mongodb').ObjectId

export default async function handler(req, res){
    const { db } = await connectToDatabase();

    const data = req.body;

    let id= new ObjectId(data.name)

    // const response = await db.collection(req.body.room).insertOne(data);

    const response = await db.collection( data.room ).update (
        { _id : id },
        { $set : { p : data.point } }
    );

    // const response = await db.collection(data.room).find({ "_id" : id}).toArray()

    res.json(response)

}