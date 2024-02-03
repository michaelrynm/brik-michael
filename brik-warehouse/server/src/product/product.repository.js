const prisma = require("../db");

const findProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const findProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  return product;
};

const insertPorduct = async (productData) => {
   const product = prisma.product.create({
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
      return product
};

const deleteProductById = async (id) => {
    const product = await prisma.product.delete({
        where: {
          id,
        },
      });
      return product
}

const editProduct = async (id, productData) => {
    const product = await prisma.product.update({
        where: {
          id: parseInt(id)
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
      return product
}

module.exports = {
  findProducts,
  findProductById,
  insertPorduct,
  deleteProductById,
  editProduct,
};
