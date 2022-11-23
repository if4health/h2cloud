const mongoose = require('mongoose');
const CodeableConcept = require('./CodeableConcept');
module.exports = new mongoose.Schema(
  {
    systemType: {
      type: CodeableConcept,
      default: void 0,
    },
    version: {
      type: String,
      default: void 0,
    },
  },
  {
    _id: false,
  }
);
