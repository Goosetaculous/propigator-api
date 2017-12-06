//ANYTHING AUTH
const jwt = require('jsonwebtoken')

const authenticated = true;
module.exports = {
    userLogin:(req,res)=>{
        //if authenticated send token to react
        //react will store this in local or session storage
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