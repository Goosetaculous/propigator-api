//READ / IMPORT FROM CONTROLLER
var express = require("express");
var router = new express.Router();


var authenticate = require("../controller/api/auth")
var api =  require('../controller/api/endpoints')
var userRoute =  require('./userRoutes')
var propertyRoute =  require('./propertyRoutes')


router.use("/api/user",userRoute)
router.use("/api/home",propertyRoute)

module.exports = router;

// module.exports=(app)=>{
//     app.use(function(req, res, next) {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth");
//         next();
//     });

    
//     app.post('/authenticate', authenticate.userLogin);

//     app.post('/property', api.ensureToken, api.getProperty);

// }