const express = require('express');
const validate = require('express-validation');
const router = express.Router();
const controller = require('./controller/user.controller');

router.route('/user').post(controller.user);

module.exports = router;