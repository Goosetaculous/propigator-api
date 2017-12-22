
var zillow = require('../utility/zillow');

var PropertyModelController = {
    getPropertyzillow:(req,res)=>{
        console.log(req.body)
        //IN ES6 if object key is the same as the object value
        // then you can just use the actual value 
        const parameters = req.body
        !parameters.address || !parameters.citystatezip ? res.status(412).send("Missing Property information!"): null
        zillow.deepSearch(parameters).then(function (results) {
            var response = zillow.cleanDeepSearch(results);
            var resonseCode = response[0];
            var resonseMessage = response[1];
            if (resonseCode === 200) {
                zillow.propertyDetails({zpid: resonseMessage.property_id})
                    .then(function (results) {
                        var detailMessage = zillow.cleanPropertyDetails(results);
                        resonseMessage = util.extend(resonseMessage, detailMessage);
                        res.status(resonseCode).send(resonseMessage);
                    })
            }
            else{
                res.status(resonseCode).send(resonseMessage);
            }
        });

    }
}

module.exports=PropertyModelController