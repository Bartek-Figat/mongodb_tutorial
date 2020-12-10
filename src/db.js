import { MongoClient, Logger, MongoError } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const ops = {
  useUnifiedTopology: true,
};

class DB {
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

class Method {
  static async insertOne(doc) {
    const { collection, client } = await DB.getConnection(url, ops);
    try {
      return await collection.insertOne(doc);
    } catch (e) {
      console.error(`Insert One Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async insertMany(docs, options) {
    const { collection, client } = await DB.getConnection(url, ops);
    try {
      return await collection.insertMany(docs, options);
    } catch (e) {
      console.error(`Insert Many Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async findOne(doc) {
    const { collection, client } = await DB.getConnection(url, ops);
    try {
      return await collection.findOne(doc);
    } catch (e) {
      console.error(`Find One Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async find(doc) {
    const { collection, client } = await DB.getConnection(url, ops);
    try {
      return await collection.find(doc).toArray();
    } catch (e) {
      console.error(`Find All Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async updateMany(filter, update, options) {
    const { collection, client } = await DB.getConnection(url, ops);
    try {
      return await collection.updateMany(filter, update, options);
    } catch (e) {
      console.error(
        `Find and update Document in collection profile failure: ${e}`
      );
    } finally {
      await client.close();
    }
  }

  static async updateOne(filter, update, options) {
    const { collection, client } = await DB.getConnection(url, ops);
    try {
      return await collection.updateOne(filter, update, options);
    } catch (e) {
      console.error(
        `Find and update Document in collection profile failure: ${e}`
      );
    } finally {
      await client.close();
    }
  }

  static async findOneAndUpdate(filter, updateDoc) {
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

  static async deleteOne(query) {
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

export { Method };
