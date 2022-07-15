let express = require("express");
let app = express();

app.get("/", (req,res) => {
    res.status(200).send("Hello GET!");
});
app.post("/", (req,res) => {
    res.status(200).send("Hello POST!");
});
app.put("/", (req,res) => {
    res.status(200).send("Hello PUT!");
});
app.delete("/", (req,res) => {
    res.status(200).send("Hello DELETE!");
});

exports.cf_api = app;