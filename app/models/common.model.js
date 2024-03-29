const { MONGO_DB, M_CONNECT } = require('./../config/mongoDB');

exports.userLogin = async (payload) => {
    const db = (await M_CONNECT).db(process.env.MONGO_DB_NAME);
    let collection = await db.collection(process.env.MONGO_DB_USER_COLLECTION);
    let res = await collection.insertOne(payload);
    return res.insertedId;
}

exports.getUserList = async (sessionId) => {
    const db = (await M_CONNECT).db(process.env.MONGO_DB_NAME);
    let collection = await db.collection(process.env.MONGO_DB_USER_COLLECTION);
    let res = await collection.find({ sessionId: { $ne: sessionId } }).toArray();
    return res;
};

exports.getUserInfo = async (sessionId) => {
    const db = (await M_CONNECT).db(process.env.MONGO_DB_NAME);
    let collection = await db.collection(process.env.MONGO_DB_USER_COLLECTION);
    let res = await collection.findOne({ sessionId: sessionId });
    return res;
};

exports.getUserChats = async (senderId, receiverId) => {
    const db = (await M_CONNECT).db(process.env.MONGO_DB_NAME);
    let collection = await db.collection(process.env.MONGO_DB_CHAT_COLLECTION);
    let res = await collection.find({ room: { $all: [senderId, receiverId] } }).toArray();
    return res;
};

exports.saveChats = async (payload) => {
    const db = (await M_CONNECT).db(process.env.MONGO_DB_NAME);
    let collection = await db.collection(process.env.MONGO_DB_CHAT_COLLECTION);
    let res = collection.insertOne(payload);
    return (await res).insertedId
}