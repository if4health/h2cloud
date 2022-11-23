const mongoose = require('mongoose');
const Timing = require('./Timing');
const CodeableConcept = require('./CodeableConcept');
module.exports = new mongoose.Schema(
  {
    event: {
      type: [Date],
      default: void 0,
    },
    repeat: {
      type: Timing,
      default: void 0,
    },
    code: {
      type: CodeableConcept,
      default: void 0,
    },
  },
  {
    _id: false,
  }
);
