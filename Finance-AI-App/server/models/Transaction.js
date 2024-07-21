//Imports that are needed
import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

//Defines a schema for a transaction in the application.
const TransactionSchema = new Schema(
  {
    buyer: {
        type: String,
        required: true,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v /100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

// Creating a Mongoose model named "Transaction" based on the TransactionSchema
const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;