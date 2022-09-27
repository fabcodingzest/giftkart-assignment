import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productsRoute from "./routes/products.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/products", productsRoute);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log("listening to port 4000");
    })
  )
  .catch((error) => console.log(error));
