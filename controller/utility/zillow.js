var Zillow  = require('node-zillow')

var zwsid = "X1-ZWz1f5677kiadn_6bk45" //process.env.ZILLOW_KEY
var zillow = new Zillow(zwsid)

var parameters = {
 zpid: 1111111
};




 module.exports = {
    tryZillow:(cb)=>{
        zillow.get('GetZestimate', parameters)
        .then(function(results) {
            cb(results)
          // results here is an object { message: {}, request: {}, response: {}}  
        })
    } 
 }