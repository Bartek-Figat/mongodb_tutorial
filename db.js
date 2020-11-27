const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const ops = {
  useUnifiedTopology: true,
};

class DB {
  constructor(url, ops) {}

  static async getConnection(url, ops) {
    const client = new MongoClient(url, ops);

    try {
      await client.connect();
      const database = client.db("users");
      const collection = database.collection("profile");
      return { collection, client };
    } catch (e) {
      console.error(e);
    }
  }
}

class Methods {
  static async insertOneDoc(doc) {
    const { collection, client } = await DB.getConnection(url, ops);
    try {
      return await collection.insertOne(doc);
    } catch (e) {
      console.error(`Insert One Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async insertManyDoc(doc) {
    const { collection, client } = await DB.getConnection(url, ops);
    try {
      return await collection.insertMany(doc);
    } catch (e) {
      console.error(`Insert Many Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async findOneDoc(doc) {
    const { collection, client } = await DB.getConnection(url, ops);
    try {
      return await collection.findOne(doc);
    } catch (e) {
      console.error(`Find One Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async findAllDoc(doc) {
    const { collection, client } = await DB.getConnection(url, ops);
    try {
      return await collection.find(doc).toArray();
    } catch (e) {
      console.error(`Find All Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async findOneDocAndUpdate(filter, updateDoc) {
    const { collection, client } = await DB.getConnection(url, ops);
    try {
      return await collection.findOneAndUpdate(filter, updateDoc);
    } catch (e) {
      console.error(
        `Find and update Document in collection profile failure: ${e}`
      );
    } finally {
      await client.close();
    }
  }

  static async deleteOneDoc(query) {
    const { collection, client } = await DB.getConnection(url, ops);
    try {
      return await collection.deleteOne(query);
    } catch (e) {
      console.error(`Find and  delete in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }
}

module.exports = {
  Methods,
};
