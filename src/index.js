import { ObjectID } from 'mongodb';
import { Method } from './db';
import { usersDoc } from './request';

import { shoppingCart } from './cart';

const findOne = async () => {
  try {
    const res = await Method.findOne();
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
  }
};

const insertOne = async () => {
  try {
    const res = await Method.insertOne();
    return res;
  } catch (e) {
    console.log(e);
  }
};

const insertMany = async () => {
  try {
    const options = {};
    const res = await Method.insertMany(usersDoc, options);
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
      _id: ObjectID('5fd841e494e3823ed87c8ff3'),
    };
    const update = {
      $push: {
        shopping: shoppingCart,
      },
    };
    const res = await Method.updateOne(filter, update);
    if (res) {
      console.log(res.result);
    }
    return res;
  } catch (e) {
    console.log(e);
  }
};
