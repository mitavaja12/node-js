const express = require('express');
const dbConnect = require('./db');
const model = require('./model');
const isValid = require('./validate');

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    let data = await model.find();
    res.send(data);
});

app.post("/",  async (req, res) => {
    let data = await model.create(req.body);
    res.send(data);
});

app.patch("/:id", async (req, res) => {
    let { id } = req.params;
    let data = await model.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data);
});

app.delete("/:id", async (req, res) => {
    let { id } = req.params;
    let data = await model.findByIdAndDelete(id);
    res.send(data);
});

app.listen(9090, () => {
    console.log("Server is running on port 9090");
    dbConnect();
});