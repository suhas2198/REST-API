const mongoose = require("mongoose");

const Product = require("../model/product");

//R from CRUD[GET]

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find(); //Get all the documents from the collection
    res.status(200).json({
      msg: "All documents are fetched successfully ",
      data: products,
    });
  } catch (error) {
    res.status(501).json({
      code: 10,
      msg: "Something went wrong",
      err: error,
    });
  }
};

//R from CRUD[GET Single]

exports.getProductsById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.ProductId); //Get all the documents from the collection
    let m = "";
    if (product === null) {
      m: "No Matching document found";
    } else {
      m: "Document fetched successfully";
    }

    res.status(200).json({
        msg:m,
        data:product
    })
  } catch (error) {
    res.status(501).json({
      code: 10,
      msg: "Something went wrong",
      err: error
    });
  }
};

// C from CRUD[POST]
exports.createProduct = async (req, res) => {
  try {
    // Create a product object

    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      price: req.body.price,
    });

    const data = await product.save(); // call the save method nd wait for it , if it reaches this point , means save() was successful

    res.status(200).json({
      msg: "Product created successfully",
      product: data,
    });
  } catch (error) {
    res.status(501).json({
      code: 10,
      msg: "Something went wrong",
      err: error,
    });
  }
};

// U from CRUD[PUT]
exports.updateProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(req.params.ProductId, req.body);
    res.status(200).json({
      msg: "Product Updated successfully",
      product: data,
    });
  } catch (error) {
    res.status(501).json({
      code: 10,
      msg: "Something went wrong",
      err: error,
    });
  }
};

// D from CRUD[Delete]
exports.deleteproduct = async (req, res) => {
    try {
      const data = await Product.findByIdAndDelete(req.params.ProductId);
      res.status(200).json({
        msg: "Product Deleted successfully",
        product: data,
      });
    } catch (error) {
      res.status(501).json({
        code: 10,
        msg: "Something went wrong",
        err: error,
      });
    }
  };
