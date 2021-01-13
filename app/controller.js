const { getUniqueId, getTime } = require('./helper');

exports.userLogin = async (req, res) => {
    try {
        const { name } = JSON.parse(req.body.payload);
        const currentTime = getTime();
        let user = {
            name,
            profileImg: '',
            sessionId: getUniqueId(),
            createdAt: currentTime,
            updatedAt: currentTime
        };

        if (req.file && req.file.filename) {
            user['profileImg'] = `${process.env.BASE_PATH}:${process.env.PORT}/${process.env.PROFILE_IMAGE_PATH}/${req.file.filename}`;
        }
    } catch (ex) {

    }
};