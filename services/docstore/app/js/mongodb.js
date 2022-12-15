const Settings = require('@overleaf/settings')
const { MongoClient, ObjectId } = require('mongodb')

const mongoClient = new MongoClient(Settings.mongo.url)
const mongoDb = mongoClient.db()

const db = {
  docs: mongoDb.collection('docs'),
  docOps: mongoDb.collection('docOps'),
}

module.exports = {
  db,
  mongoClient,
  ObjectId,
}
