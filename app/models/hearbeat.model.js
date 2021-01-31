const { RedisClient } = require('redis');
const redisClient = require('./../config/redis');

exports.getOfflineUserInfo = (key, subkey, cb) => {
    redisClient.HGET(key, subkey, (err, res) => {
        cb(err, res);
    });
};

exports.addUsersToListRedis = (key, subkey, value, cb) => {
    redisClient.HMSET(key, subkey, JSON.stringify(value), (err, res) => {
        cb(err, res);
    });
};

exports.removeUsersFromListRedis = (key, subkey) => {
    redisClient.HDEL(key, subkey);
};