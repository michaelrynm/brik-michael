const express = require("express");
const prisma = require("../db");
const {
  getAllProduct,
  getProductById,
  createProduct,
  delteProduct,
  deleteProduct,
  updateProductById,
} = require("./product.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProduct();
  res.send(products);
});

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const product = await getProductById(id);

  res.send(product);
});

router.post("/", async (req, res) => {
  const newProductData = req.body;
  const product = await createProduct(newProductData);
  res.send({
    message: "succes create product",  
  });
});

router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const product = await deleteProduct(id);

  res.send("Product Deleted");
});

router.put("/:id", async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  const product = await updateProductById(parseInt(productId), productData);
  res.send({
    data: product,
    message: "Success Edit Data",
  });
});

module.exports = router;
