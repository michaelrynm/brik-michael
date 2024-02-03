const prisma = require("../db");
const { findProducts, findProductById, insertPorduct, deleteProductById, editProduct } = require("./product.repository");

const getAllProduct = async () => {
  const products = await findProducts();
  return products;
};

const getProductById = async (id) => {
  if (typeof id !== "number") {
    throw Error("Id is not a number");
  }

  const product = await findProductById(id);

  if (!product) {
    throw Error("Product Not Found");
  }
  return product;
};

const createProduct = async (newProductData) => {
  const product = await insertPorduct(newProductData)
  return product;
};

const deleteProduct = async (id) => {
  if (typeof id !== "number") {
    throw Error("Id is not a number");
  }

  const product = await deleteProductById(id)
};

const updateProductById = async (id, productData) => {
  const product = await editProduct(id, productData)
  return product;
};

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  deleteProduct,
  updateProductById,
};
