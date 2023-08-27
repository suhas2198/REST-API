const express = require("express");
require("dotenv").config;
const app = express();
const productsRouter = require("./api/Routes/products");
const ordersRouter = require("./api/Routes/orders");
const morgan = require("morgan");
const mongoose = require("mongoose");

mongoose.connect(process.env.MongoUri)
.then(()=>{
    console.log("connected to MongoDb successfully")
})

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
//parse  the application
app.use(bodyParser.json());

app.use(morgan("dev"));

app.use("/products", productsRouter);

app.use("/orders", ordersRouter);

module.exports = app;
