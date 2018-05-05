
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

class People {
    constructor(arr) {
        this.name = arr[0];
        this.phoneNum = arr[1];
        this.email = arr[2];
        this.id = arr[3];
    }
};

const tableAvailable = [];
const tableWait = [];

const p1 = new People('Tom',7323550000,'tom@gmail.com',1)

tableAvailable.push(p1);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "homePage.html"));
});
  
app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));

});
  
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.get("/api/characters/:character", function(req, res) {

  });


app.post('/reserve', function(req,res) {
    let newReservation = req.body;
    let inputSubmit = Object.keys(newReservation);  
    if(tableAvailable.length >3) {
        console.log('No available tables');
        let newRes = new People(inputSubmi);
        tableWait.push(newRes);
        console.log(JSON.stringify(tableWait));
    } else {
        console.log('Table is availablse');
        let newRes = new People(inputSubmi)
        tableAvailable.push(newRes);
        console.log(JSON.stringify(tableAvailable));
    }
});
