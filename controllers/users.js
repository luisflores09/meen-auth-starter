const bcrypt = require('bcrypt');
const express = require('express');
const userRouter = express.Router();
const User = require("../models/user.js");



module.exports = userRouter;