
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

class Reservation {
    constructor(name,phoneNum,email,id) {
        this.name = name;
        this.phoneNum = phoneNum;
        this.email = email;
        this.id = id;
    }
};

const people = [];

const p1 = new Reservation('Tom',7323550000,'tom@gmail.com',1)

people.push(p1);