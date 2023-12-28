const mongoose = require("mongoose");
const menuSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a product name"],
  },
  isVeg: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const typeSchema = mongoose.Schema({
  menuType: {
    type: String,
    required: true,
  },
  menu: [menuSchema],
});

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    cuisine: {
      type: Array,
      required: true,
    },
    isPromoted: {
      type: Boolean,
      required: true,
    },
    avgRating: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    deliveryTime: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    type: [typeSchema],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
