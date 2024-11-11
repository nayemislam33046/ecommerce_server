const express = require("express");
const cors = require("cors");
const Product = require("./router/Products");
const singleProduct = require("./router/SingleProduct");
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", Product);
app.use("/", singleProduct);
module.exports = app;