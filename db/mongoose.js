var mongoose =  require('mongoose')
var bluebird = require("bluebird");
//mongoose.Promise =  bluebird; // use promises
mongoose.Promise =  global.Promise; // use promises
// connecting
process.env.MONGODB_URI ? process.env.MONGODB_URI: process.env.MONGODB_URI = "mongodb://heroku_w0rkbtfd:dkg1jvcipdg37mkvncjlfmt1jb@ds129776.mlab.com:29776/heroku_w0rkbtfd"
mongoose.connection.openUri(process.env.MONGODB_URI)
module.exports = {mongoose}
