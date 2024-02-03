const express = require("express");
const prisma = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await prisma.product.findMany();
  res.send(products);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!product) {
    return res.status(404).send("Product Not Found");
  }
  res.send(product);
});

router.post("/", async (req, res) => {
  const newProductData = req.body;
  const product = await prisma.product.create({
    data: {
      name: newProductData.name,
      category: newProductData.category,
      description: newProductData.description,
      image: newProductData.image,
      number: newProductData.number,
      price: newProductData.price,
      weight: newProductData.weight,
    },
  });

  res.send({
    data: product,
    message: "Sucess create product",
  });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await prisma.product.delete({
    where: {
      id: parseInt(id),
    },
  });

  res.send("Product Deleted");
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const productData = req.body;

  const product = await prisma.product.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: productData.name,
      category: productData.category,
      description: productData.description,
      image: productData.image,
      number: productData.number,
      price: productData.price,
      weight: productData.weight,
    },
  });

  res.send({
    data: product,
    message: "Success Edit Data",
  });
});

module.exports = router;
