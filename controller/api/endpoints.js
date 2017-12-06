const jwt = require('jsonwebtoken')

verifyToken=(token,callback)=>{
    console.log("TOKEN ",token)
    jwt.verify(token,'secret_key_value',(err)=>{
        if(err){
            callback(true)
        }else{
            callback(false)
        }
    })
}


module.exports = {
    verifyToken:(req, res, next)=>{        
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
        console.log(req.token)
        
        verifyToken(req.token,(verified)=>{
            verified ? res.status(200).send({status:"success"}) : res.sendStatus(403)
        })
        
    }
}