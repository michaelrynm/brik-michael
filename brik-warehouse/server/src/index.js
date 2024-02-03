const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.send("Hello World Hi");
});

const productController = require("./product/product.controller")
app.use("/products", productController)

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
});
