require("dotenv").config();

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT;

const app = express();
const server = http.createServer(app);
const Routes = require('./app/routes');

app.use([
    cors(),
    express.static('uploads'),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    Routes
]);

const io = ( module.exports.io = require('socket.io')(server) );



server.listen(port, () => {
    console.log(`Server is runnig at port ${port}`);
});