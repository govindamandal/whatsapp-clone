const io = require('./../../server').io;
const { getTime } = require('./../helper');
const { addUsersToListRedis, removeUsersFromListRedis } = require('./../models/hearbeat.model');
const { saveChats } = require('./../models/common.model');

module.exports = (socket) => {
    try {
        console.log("Connected");
        socket.on('join-user', (data, callback) => {
            const { createdAt, name, profileImg, sessionId, updatedAt, _id } = data;
            const currentTIme = getTime();
            const newUser = {
                createdAt,
                name,
                profileImg,
                sessionId,
                updatedAt: currentTIme,
                _id
            };

            removeUsersFromListRedis(`WC:user:OFF`, sessionId);

            addUsersToListRedis(
                `WC:user:ON`,
                sessionId,
                {time: currentTIme},
                (e, r) => {
                    if (e) {
                        return callback(e);
                    } else {
                        console.log('New user joined');
                        socket.sessionId = sessionId;
                        socket.join(sessionId)
                        socket.broadcast.emit('new-online-user');
                        callback();
                    }
                }
            );
        });

        socket.on('send-message', async, (data, calback) => {
            const { senderId, receiverId, msg } = data;
            const chatObj = {
                room: [receiverId, senderId],
                senderId,
                receiverId,
                msg,
                time: getTime()
            };
            
            await saveChats(chatObj);
            io.to(receiverId).emit('receive-msg', chatObj);
            callback(chatObj);
        });

        socket.on('user-typping', async(data, callback) => {
            const { senderId, receverId, msg} = data;
            const chatObj = {
                room: [receverId, senderId],
                senderId,
                receverId,
                msg,
                time: getTime()
            };

            io.to(receverId).emit('user-typping', chatObj);
            callback(data);
        });

        socket.on('disconnect', () => {
            const { sessionId } = socket;
            removeUsersFromListRedis(`WC:user:ON`, sessionId);
            if (sessionId) {
                const offlineUser = {
                    time: getTime(),
                    sessionId
                };

                addUsersToListRedis(`WC:user:OFF`, sessionId, offlineUser, (e, r) => {
                    console.log('User left');
                });

                socket.broadcast.emit('new-offline-user', offlineUser);
            }
        });

    } catch(ex) {
        console.log(ex.message);
    }
};