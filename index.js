require("dotenv").config();

const express = require("express");
const db = require("./database");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect(db.uri, { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

app.listen(process.env.PORT || 3000, () => console.info(`API is running..`));

module.exports = async () => app;
