const { ObjectID } = require("mongodb");
const { Methods } = require("./db");

const findOne = async () => {
  try {
    const query = {
      _id: ObjectID("5fbc9b19eaf23401b03c58e9"),
    };
    const res = await Methods.findOneDoc(query);
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
  }
};

findOne();
