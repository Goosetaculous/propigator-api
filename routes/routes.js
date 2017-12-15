//READ / IMPORT FROM CONTROLLER
var property = require("../controller/api/propery");

module.exports=(app)=>{
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.get("/",(req,res,next)=>{
        res.status(200).send("test")
    })
    app.post("/property", property.get_property)
}