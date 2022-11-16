const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){

});


app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});