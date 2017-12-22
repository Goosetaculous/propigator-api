var express = require("express");
var router = express.Router();
var user = require('../controller/api/userController')

router.post('/subscribe', user.subscribe)

module.exports = router;