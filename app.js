var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    var campgrounds = [
        {name: "Yellowstone", image: "https://media.cntraveler.com/photos/5949ac042bd0d42819c6066e/master/w_770,c_limit/Yellowstone-GettyImages-183024049.jpg"},
        {name: "Yosetime", image: "https://media.cntraveler.com/photos/5949ac0584b37669f9731897/master/w_770,c_limit/Yosemite-GettyImages-509307146.jpg"},
        {name: "Glacier National Park", image: "https://media.cntraveler.com/photos/5949abfa8dfea221eac57065/master/w_770,c_limit/Glacier-GettyImages-487522016.jpg"}
    ]

    res.render("campgrounds", {campgrounds:campgrounds});
});

app.get("*", function (req, res) {
    res.status(404).send('Code 404: Not found!');
});

app.listen(3000);