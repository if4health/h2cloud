const mongoose = require('mongoose');
const CodeableConcept = require('./CodeableConcept');
const Identifier = require('./Identifier');
module.exports = new mongoose.Schema(
  {
    type: {
      type: CodeableConcept,
      default: void 0,
    },
    component: {
      type: Identifier,
      default: void 0,
    },
    value: {
      type: String,
      default: void 0,
    },
  },
  {
    _id: false,
  }
);
