const mongoose = require('mongoose');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');
module.exports = new mongoose.Schema(
  {
    type: {
      type: CodeableConcept,
      default: void 0,
    },
    valueQuantity: {
      type: [Quantity],
      default: void 0,
    },
    valueCode: {
      type: [CodeableConcept],
      default: void 0,
    },
  },
  {
    _id: false,
  }
);
