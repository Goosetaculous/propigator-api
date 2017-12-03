const express =  require('express')
const bodyParser =  require('body-parser')
var app =  express()
const port =  process.env.PORT || 3000

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: false})) 


require("./routes/routes")(app)

app.listen (port,()=>{
    console.log("Listening to PORT " + port)
})


