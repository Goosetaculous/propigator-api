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
    },
    cleanDeepSearch: (results)=>{
        try {
            if (results.message.code !== "0"){
                return [422, results.message.text]
            }
            allDetailResults = results.response.results.result[0];
            zillowResults = {
                address: [allDetailResults.address[0].street[0], allDetailResults.address[0].city[0], allDetailResults.address[0].state[0], allDetailResults.address[0].zipcode[0]].join(", "),
                bathrooms: allDetailResults.bathrooms[0],
                bedrooms: allDetailResults.bedrooms[0],
                estimate: allDetailResults.zestimate[0].amount[0],
                estimate_from_tax: allDetailResults.taxAssessment ? allDetailResults.taxAssessment[0] : undefined,
                lastSoldPrice: allDetailResults.lastSoldPrice ? allDetailResults.lastSoldPrice[0] : undefined,
                lastSoldDate: allDetailResults.lastSoldDate ?  allDetailResults.lastSoldDate[0] : undefined,
                property_id: allDetailResults.zpid[0]
            };
            return [200, zillowResults];
        }
        catch (err){
            console.log(err);
            return [500, err]
        }
    }
 }