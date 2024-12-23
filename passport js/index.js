const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dbConnect = require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const PORT = 8090;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  dbConnect()
});
