var User = require("../../models/Users");


var UserModelController = {
    /**
     * Start collecting user emails
     */
    subscribe:(req,res)=>{
        console.log(req.body)
        var subscriber = new User(req.body) 
        subscriber.save().then(()=>{
            res.status(200).json({success:1})
        }).catch((e)=>{
            res.status(500).json({error:e})
        })
    }
}

module.exports = UserModelController