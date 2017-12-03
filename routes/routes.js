//READ / IMPORT FROM CONTROLLER
var property = require("../controller/api/propery");

module.exports=(app)=>{
    app.get("/",(req,res)=>{
        res.status(200).send("test")
    })
    app.get("/property", property.get_property)
}