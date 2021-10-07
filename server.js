const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const userController = require('./controllers/users');

require('dotenv').config();
const PORT = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
});

db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('Mongo Connected'));
db.on('disconnected', () => console.log('Mongo Disconnected'));

app.use(express.urlencoded({ extended: true}));


// app.use('/users', userController);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
