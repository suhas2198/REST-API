const mongoose = require("mongoose");

const uri =
  "mongodb+srv://Suhas123:suhas123@cluster0.6zz5sjh.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to mongoDb Successfully");
  })
  .catch(() => {
    console.log(err);
  });
