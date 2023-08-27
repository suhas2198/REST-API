const express = require("express");
const Product = require("../model/product");
const router = express.Router();
const mongoose= require('mongoose')
const productController=require('../controllers/product.model')

//Handle GET request for products

router.get('/', productController.getProducts)

// router.get("/", (req, res) => {
//   res.status(200).json({
//     msg: "This is get request for products",
//   });
// });

//Handle GET Request for a Single Product

router.get('/:ProductId',productController.getProductsById)

// router.get("/:productId", (req, res) => {
//   res.status(200).json({
//     msg: "This is Get request",
//   });
// });

//Handle POST request for products

router.post('/',productController.createProduct)

//router.post("/", (req, res) => {
//   // body-parser will make followig properties available

//   //console.log(req.body)
//   //console.log(req.body.name)
//   //console.log(req.body.price)
//   //const tempProduct = {
//   //  name: req.body.name,
//   //  price: req.body.price,
//   //};



//   // 1. Create an object of the model

//   const product= new Product ({
//     _id:new mongoose.Types.ObjectId(),
//     name:req.body.name,
//     price:req.body.price
//   })

//   //2. Save this to the database

//   product.save()
//   .then(()=>{
//     console.log(res)
//   })
// .catch((err)=>{
//     console.log(err )
// })

 
//   res.status(200).json({
//     msg: "This is POST request for products",
//     statusMsg: "product created successfully",
//     product: product,
//   });
// });

//Handle PUT request for products

router.put('/:ProductId',productController.updateProduct)

// router.put("/:productId", (req, res) => {
//   const id = req.params.productId;
//   res.status(200).json({
//     msg: "This is POST request for products",
//     id: id,
//   });
// });

//Handle Delete request for products
router.delete('/:ProductId',productController.deleteproduct)


// router.delete("/:productId", (req, res) => {
//   const id = req.params.productId;
//   res.status(200).json({
//     msg: "This is DELETE request for products",
//     id: id,
//   });
// });

module.exports = router;
