const multer = require('multer');
const {v4: uuidv4} = require('uuid');
const path = require('path');

exports.getUniqueId = () => {
    return uuidv4();
}

exports.getTime = () => {
    return Date.now();
}

const userProfileStorage = multer.diskStorage({
    destination: `uploads/${process.env.PROFILE_IMAGE_PATH}`,
    filename: (request, file, callback) => {
        callback(null, Date.now() + path.extname(file.originalname))
    }
});

exports.userProfileUpload = multer({
    storage: userProfileStorage,
    limits: { fileSize: 1000000 }
}).single('profileImg');

const audioStorage = multer.diskStorage({
    destination: `uploads/${process.env.AUDIO_PATH}`,
    filename: (request, file, callback) => {
        callback(null, Date.now() + '.webm')
    }
});

exports.audioUpload = multer({
    storage: audioStorage,
    limits: { fileSize: 1000000 }
}).single('track');

const imageMsgFileStorage = multer.diskStorage({
    destination: `uploads/${process.env.IMAGE_MSG_FILE_PATH}`,
    filename: (request, file, callback) => {
        callback(null, Date.now() + path.extname(file.originalname))
    }
});

exports.imageMsgFileUpload = multer({
    storage: imageMsgFileStorage,
    limits: { fileSize: 1000000 }
}).single('profileImg');