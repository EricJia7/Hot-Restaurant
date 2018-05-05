
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const tableAvailable = [];
const tableWait = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "homePage.html"));
});
  
app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));

});
  
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.get("/api/characters/:character", function(req, res) {

});


app.post('/reservation', function(req,res) {
    let newReservation = req.body;
    if(tableAvailable.length === 2) {
        console.log('No available tables');
        tableWait.push(newReservation);
        console.log(tableWait);
        res.json({tableavailable: false, waitNum: tableWait.length})
    } else {
        console.log('Table is availablse');
        tableAvailable.push(newReservation);
        console.log(tableAvailable);
        res.json({tableavailable: true})
    }
});
