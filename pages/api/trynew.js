const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.

export default async function handler(req, res){

    const uri =
        "mongodb+srv://svaibavbajra:mongodb@cluster0.lxnlh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    async function run() {
    try {
        await client.connect({useUnifiedTopology: true});
        const database = client.db(req.body.room);
        const movies = database.collection("users");
        // Query for a movie that has the title 'Back to the Future'
        const movie = await movies.insertOne({name: req.body.room});
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
    }
    run().catch(console.dir);

    res.json("done")

}