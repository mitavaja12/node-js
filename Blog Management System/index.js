const express = require("express");
const dbconnect = require("./config/db");
const UserRouter = require("./routes/user.router");
const BlogRoute = require("./routes/Blog.routes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the app!");
});

app.use("/users", UserRouter)
app.use("/Blog", BlogRoute)

app.listen(8090, () => {
    console.log("listening on port 8090");
    dbconnect();
});