var Zillow = require('node-zillow');

exports.get_property = function(req, res, next) {
    var address = req.body.address;
    var citystatezip = req.body.citystatezip;
    if (!address || !citystatezip){
        res.status(412).send("Missing Property information!")
    }
    var parameters = {
        address: address,
        citystatezip: citystatezip
    };
    var zillow = new Zillow('X1-ZWz1f5677kiadn_6bk45');
    zillow.get("GetDeepSearchResults", parameters).then(function(results){
        res.send(results.response);
    });
};