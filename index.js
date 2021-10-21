require("dotenv").config();

const express = require("express");
const db = require("./database");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(db.uri, { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

app.listen(proccess.env.PORT || 3000, () => console.info(`API is running..`));

module.exports = async () => app;
