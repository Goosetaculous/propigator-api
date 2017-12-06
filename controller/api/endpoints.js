//These are valid endpoints
//Read the local storage and see if the token is there
const jwt = require('jsonwebtoken')

isAuthenticated=(token,callback)=>{
    jwt.verify(token,'secret_key_value',(err,data)=>{
        if(err){
            callback(false)
        }else{
            callback(true)
        }
    })

}


module.exports = {
    ensureToken:(req,res,next)=>{
        const bearerHeader = req.headers["x-auth"];
        if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1]            
            req.token = bearerToken;            
            next();
        }else{
            res.sendStatus(403);
        }
    },

    getProperty:(req,res)=>{
        isAuthenticated(req.token,(authenticated)=>{
            //if authenticated do stuff with this route
            res.send(authenticated)
        })
        
    }
}