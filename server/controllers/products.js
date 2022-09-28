import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    // console.log(products);

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const searchProducts = async (req, res) => {
  const { query } = req.params;
  try {
    const products = await Product.aggregate([
      {
        $search: {
          index: "autoComplete",
          autocomplete: {
            query: query,
            path: "productName",
          },
        },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          _id: 1,
          productName: 1,
          listOfImages: 1,
        },
      },
    ]);
    // console.log(products);

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      listOfImages,
      options,
      productName,
      description,
      quantity,
      rating,
      brandName,
    } = req.body;
    const product = await Product.create({
      listOfImages,
      options,
      productName,
      description,
      quantity,
      rating,
      brandName,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
