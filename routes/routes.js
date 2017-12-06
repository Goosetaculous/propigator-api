//READ / IMPORT FROM CONTROLLER
var property = require("../controller/api/propery");
var authenticate = require("../controller/api/auth")
var api =  require('../controller/api/endpoints')



module.exports=(app)=>{
    app.get("/",(req,res)=>{
        res.status(200).send("test")
    })

    app.post('/authenticate', authenticate.userLogin);

    app.get('/api/test',api.ensureToken, api.getProperty);

   }