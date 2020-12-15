import { MongoClient } from 'mongodb';

const stringURI = 'mongodb://127.0.0.1:27017';
const option = {
  useUnifiedTopology: true,
};

class DB {
  static async getConnection(url, ops) {
    const client = new MongoClient(url, ops);
    try {
      await client.connect();
      const database = client.db('users');
      const collection = database.collection('profile');
      return { collection, client };
    } catch (e) {
      console.log(e);
    }
  }
}

class Method {
  static async insertOne(doc, options) {
    const { collection, client } = await DB.getConnection(stringURI, option);
    try {
      return await collection.insertOne(doc, options);
    } catch (e) {
      console.log(`Insert One Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async insertMany(docs, options) {
    const { collection, client } = await DB.getConnection(stringURI, option);
    try {
      return await collection.insertMany(docs, options);
    } catch (e) {
      console.log(`Insert Many Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async findOne(query, options) {
    const { collection, client } = await DB.getConnection(stringURI, option);
    try {
      return await collection.findOne(query, options);
    } catch (e) {
      console.log(`Find One Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async find(query, options) {
    const { collection, client } = await DB.getConnection(stringURI, option);
    try {
      return await collection.find(query, options).toArray();
    } catch (e) {
      console.log(`Find All Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async updateMany(filter, update, options) {
    const { collection, client } = await DB.getConnection(stringURI, option);
    try {
      return await collection.updateMany(filter, update, options);
    } catch (e) {
      console.log(`Find and update Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async updateOne(filter, update, options) {
    const { collection, client } = await DB.getConnection(stringURI, option);
    try {
      return await collection.updateOne(filter, update, options);
    } catch (e) {
      console.log(`Find and update Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async findOneAndUpdate(filter, updateDoc) {
    const { collection, client } = await DB.getConnection(stringURI, option);
    try {
      return await collection.findOneAndUpdate(filter, updateDoc);
    } catch (e) {
      console.log(`Find and update Document in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async deleteOne(filter, options) {
    const { collection, client } = await DB.getConnection(stringURI, option);
    try {
      return await collection.deleteOne(filter, options);
    } catch (e) {
      console.log(`Find and  delete in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }

  static async deleteMany(filter, options) {
    const { collection, client } = await DB.getConnection(stringURI, option);
    try {
      return await collection.deleteMany(filter, options);
    } catch (e) {
      console.log(`Find and  delete in collection profile failure: ${e}`);
    } finally {
      await client.close();
    }
  }
}

export { Method };
