const express = require("express");
const cors = require("cors");
const Product = require("./router/Products");
const singleProduct = require("./router/SingleProduct");
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true)
  next()
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://eccomerce-client-kappa.vercel.app",
    credentials: true,
  })
);
app.use("/", Product);
app.use("/", singleProduct);
module.exports = app;
