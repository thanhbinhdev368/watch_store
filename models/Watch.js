const mongoose = require("mongoose");
const watchSchema = new mongoose.Schema(
  {
    code: {
      type: String(100),
      require: true,
      min: 6,
      max: 20,
      unique: true,
    },
    name: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    price: {
      type: String,
      require: true,
      min: 6,
    },
    thumnail: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    intro: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    gender: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    material: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    weight: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    length: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    width: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    height: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    strap: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    color: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
