require("dotenv").config();

const express = require("express");
const db = require("./database");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(db.uri, { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

app.listen(3000, () => console.info(`running in port 3000`));

module.exports = async () => app;
