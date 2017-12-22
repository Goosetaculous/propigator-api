var express = require("express");
var router = express.Router();
var property = require('../controller/api/propertyController')

router.post('/property', property.getPropertyzillow)

module.exports = router;