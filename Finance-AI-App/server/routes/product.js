//imports that are needed
import express from "express";
import Product from "../models/Product.js";

//Here we are creating a new router object
const router = express.Router();

//This sets up a route for handling GET requests to /products.
// As well as handling the request sending back a response
// If everything goes well we make the project to give
//us a status code 200 else if we face any error we make the 
//program to give a status code 404 
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
});

export default router;