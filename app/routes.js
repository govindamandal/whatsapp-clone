const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { userProfileUpload, audioUpload, imageMsgFileUpload } = require('./helper');

router.post('/api/login', userProfileUpload, controller.userLogin);
router.get('/api/user-list/:id', controller.getUserList);
router.get('/api/user/:id', controller.getUserInfo);
router.post('/api/chats', controller.getUserChats);
router.get('/api/user/is-offline/:id', controller.checkIfIsUserOffline);
router.post('/api/upload-voice', audioUpload, controller.uploadVoice);
router.post('/api/upload-image-file', imageMsgFileUpload, controller.uploadImageFile);

module.exports = router