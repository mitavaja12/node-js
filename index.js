const express = require('express');
const dbConnect = require('./db');
const User = require('./user.model');
// const isvalid=require('./validate')
const app = express()
app.use(express.json())

app.get("/", async (req, res) => {
    let data = await User.find()
    res.send(data)
})

app.post("/", async (req, res) => {
    let data = await User.create(req.body)
    res.send(data)
})

app.delete("/:id", async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndDelete(id)
    res.send(data)
})

app.patch("/:id", async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndUpdate(id, req.body, { new: true })
    res.send(data)
})

app.listen(8090, () => {
    console.log("Server is on port 8090");
   dbConnect()
})