//imports that are needed for our transaction.js
import express from "express";
import Transaction from "../models/Transaction.js";

//Here we are creating a new router object
const router = express.Router();

//This sets up a route for handling GET requests to /transactions.
// As well as handling the request sending back a response
//And finally limit the results to 50 transactions and sort them 
//by their creation date in descending order
router.get("/transactions", async (req,res) => {
    try {
      const transactions =await Transaction.find()
        .limit(50)
        .sort({createdOn: -1});
      
      // If everything goes well we make the project to give
      //us a status code 200 else if we face any error we make the 
      //program to give a status code 404 
      res.status(200).json(transactions);
    } catch (error) {
      res.status(404).json({message: error.message});
    }
});

export default router;