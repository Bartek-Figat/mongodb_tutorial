import { ObjectID } from 'mongodb';
import { Method } from './db';
import { usersDoc } from './request';

const findOne = async () => {
  try {
    const query = {
      _id: ObjectID(''),
    };

    const res = await Method.findOne(query);
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
  }
};

const insertOne = async () => {
  try {
    const res = await Method.insertOne();
    if (res) {
      console.log(res.result);
      console.log(res.ops);
      console.log(res.insertedCount);
    }
    return res;
  } catch (e) {
    console.log(e);
  }
};

const insertMany = async () => {
  try {
    const options = {};
    const res = await Method.insertMany(usersDoc, options);
    console.log(res.result);
    console.log(res.insertedCount);
    return res;
  } catch (e) {
    console.log(e);
  }
};

const updateMany = async () => {
  try {
    const filter = {};
    const update = { $rename: { shoppingCart: 'shopping' } };

    const res = await Method.updateMany(filter, update);
    if (res) {
      console.log(res.result);
    }
    return res;
  } catch (e) {
    console.log(e);
  }
};
const updateOne = async () => {
  try {
    const filter = {
      _id: ObjectID('5fd19e85d43104440806d3d1'),
    };

    const update = { $inc: { age: 1 } };
    const res = await Method.updateOne(filter, update);
    if (res) {
      console.log(res.result);
    }
    return res;
  } catch (e) {
    console.log(e);
  }
};
