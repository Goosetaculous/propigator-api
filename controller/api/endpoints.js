//These are valid endpoints
//Read the local storage and see if the token is there
const jwt = require('jsonwebtoken');
var zillow = require("../utility/zillow");

isAuthenticated=(token,callback)=>{
    jwt.verify(token,'secret_key_value',(err,data)=>{
        if(err){
            return false;
        }else{
            return true;
        }
    })

}


module.exports = {
    ensureToken:(req,res,next)=>{
        const bearerHeader = req.headers["x-auth"];
        if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            req.token = bearerToken;            
            next();
        }else{
            res.sendStatus(403);
        }
    },

    getProperty:(req, res, next)=>{
        var address = req.body.address;
        var citystatezip = req.body.citystatezip;
        if (!address || !citystatezip){
            res.status(412).send("Missing Property information!")
        }
        var parameters = {
            address: address,
            citystatezip: citystatezip
        };
        zillow.deepSearch(parameters).then(function (results) {
            var response = zillow.cleanDeepSearch(results);
            var resonseCode = response[0];
            var resonseMessage = response[1];
            res.status(resonseCode).send(resonseMessage);
        });
    }
}