import mongoose from "mongoose";

const ProductsSchema = mongoose.Schema({
  listOfImages: [String],
  options: [String], //this will be list used for dropdown,
  productName: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: String, default: 1 },
  rating: Number, // possible values – 1,2,3,4,5
  brandName: { type: String, required: true },
});

const Product = mongoose.model("Product", ProductsSchema);

export default Product;
