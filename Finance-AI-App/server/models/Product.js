//imports that are needed
import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

// Defines a schema for a product in the application
const ProductSchema = new Schema(
  {
    price: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v /100,
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v/ 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  {timestamps: true, toJSON: { getters: true } }
);

// Creating a Mongoose model named "Product" based on the ProductSchema
const Product = mongoose.model("Product", ProductSchema);

export default Product;