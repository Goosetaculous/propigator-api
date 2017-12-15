var Zillow  = require('node-zillow');

var zwsid = "X1-ZWz1f5677kiadn_6bk45"; //process.env.ZILLOW_KEY
var zillow = new Zillow(zwsid);



 module.exports = {
    tryZillow:(cb)=> {
        zillow.get('GetZestimate', {zpid: 1111111})
        .then(function (results) {
            cb(results)
        });
    },
    deepSearch:(parameters)=>{
        return zillow.get('GetDeepSearchResults', parameters);
    }
 }