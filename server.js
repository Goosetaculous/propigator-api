require('./db/mongoose');
const express =  require('express');
const bodyParser =  require('body-parser');
var routes  =  require('./routes/routes')
var app =  express()
const port =  process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth");
        next();
});
app.use("/", routes);
app.get("/",(req,res,next)=>{
            res.status(200).send("version 1.0.0")
        });
app.listen (port,()=>{
    console.log("Listening to PORT " + port)
})