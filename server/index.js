const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const InventoryModel = require("./models/inventory");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://test:test@hospitaldata.yk8ra.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.get("/read", async(req, res) => {
    const name = req.body.name;
    const filter = {name: name};
    InventoryModel.find(filter, (err, result) => {
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    })
});

app.post("/update", async(req, res) => {
    const name = req.body.name;
    const total = req.body.total;
    const count = req.body.count;

    const filter = {name: name};
    const update = {total: total, count: count};

    try{
        await InventoryModel.findOneAndUpdate(filter, update);
        res.send("Item updated");
    } catch(err){
        console.log(err);
    }
});

app.listen(5000, ()=>{
    console.log("Server started at port 5000");
});