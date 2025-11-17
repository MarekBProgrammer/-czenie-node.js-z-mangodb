
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://marekbabicz_db_user:kPfqHwlE9KJBbv44@cluster0.dhmpuco.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDb() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB");
  }
  return client;
}

module.exports = { client, connectDb };
