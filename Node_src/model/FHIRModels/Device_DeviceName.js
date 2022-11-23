const mongoose = require('mongoose');
module.exports = new mongoose.Schema(
  {
    name: {
      type: String,
      default: void 0,
    },
    type: {
      type: String,
      default: void 0,
    },
  },
  {
    _id: false,
  }
);
