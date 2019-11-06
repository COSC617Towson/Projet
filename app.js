var express = require("express");
var app = express();
var path = require('path');

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    var campgrounds = [
        { name: "Yellowstone", image: "https://media.cntraveler.com/photos/5949ac042bd0d42819c6066e/master/w_770,c_limit/Yellowstone-GettyImages-183024049.jpg" },
        { name: "Yosetime", image: "https://media.cntraveler.com/photos/5949ac0584b37669f9731897/master/w_770,c_limit/Yosemite-GettyImages-509307146.jpg" },
        { name: "Glacier National Park", image: "https://media.cntraveler.com/photos/5949abfa8dfea221eac57065/master/w_770,c_limit/Glacier-GettyImages-487522016.jpg" },
        { name: "Grand Canyon", image: "https://media.cntraveler.com/photos/5949abfa2bd0d42819c60666/master/w_770,c_limit/Grand-Canyon-GettyImages-489546829.jpg" },
        { name: "Zion National Park", image: "https://media.cntraveler.com/photos/5949ac0584b37669f9731899/master/w_770,c_limit/zion-GettyImages-514653655.jpg" },
        { name: "Grand Teton National Park", image: "https://media.cntraveler.com/photos/5949abfad2f4466044c130e2/master/w_770,c_limit/Grand-Teton-GettyImages-108129681.jpg" },
        { name: "Arches National Park", image: "https://media.cntraveler.com/photos/5949abf31bb4381cb15c1b77/master/w_770,c_limit/Arches-GettyImages-643292956.jpg" },
        { name: "Acadia National Park", image: "https://media.cntraveler.com/photos/5949abf324f1965a3e97eb58/master/w_770,c_limit/acadia-GettyImages-463009459.jpg" }
    ]

    res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/Sample", function (req, res) {
    res.sendFile(path.join(__dirname+'/YelpCamp/Campground.html'));
});


app.get("*", function (req, res) {
    res.status(404).send('Code 404: Not found!');
});

app.listen(3000);