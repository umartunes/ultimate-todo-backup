var express = require('express')

//Configure Server
var server = express()
server.set('port', process.env.PORT || 5000)

server.get('/', function(req, res){
    res.send("Can listen to root")
})

//Error Control
server.use(function (err, req, res, next) {

    console.error(err)
    res.status(500).send('Something broke!')

})


server.listen(server.get("port"), function () {
    console.log("Express server listening on port " + server.get("port"));
});