const express = require('express');
const router = express.Router();

const usersRoute = require('./users.routes');

router.use('/users', usersRoute);

module.exports = router;
