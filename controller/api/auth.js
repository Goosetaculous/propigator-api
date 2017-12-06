//ANYTHING AUTH
const jwt = require('jsonwebtoken')

const authenticated = true;
module.exports = {
    userLogin:(req,res)=>{
        if(authenticated){
            const user = { id: 1}
            const token = jwt.sign({user}, 'secret_key_value');
            res.json({
                token
            })
            //Authenticated
            res.status(200);
        }
    }
}