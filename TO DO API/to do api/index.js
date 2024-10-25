const express = require('express')

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("todo api")
})

app.listen(8090, () => {
    console.log("Listening On Port 8090");

})