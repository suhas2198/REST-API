const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = Schema({
  _id:Schema.Types.ObjectId,
  name: { type: String, require: true },
  price: { type: String, require: true },
});
module.exports = mongoose.model("Product", productSchema);
