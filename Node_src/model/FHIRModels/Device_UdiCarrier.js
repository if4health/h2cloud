const mongoose = require('mongoose');
module.exports = new mongoose.Schema(
  {
    deviceIdentifier: {
      type: String,
      default: void 0,
    },
    issuer: {
      type: String,
      default: void 0,
    },
    jurisdiction: {
      type: String,
      default: void 0,
    },
    carrierAIDC: {
      type: Buffer,
      default: void 0,
    },
    carrierHRF: {
      type: String,
      default: void 0,
    },
    entryType: {
      type: String,
      default: void 0,
    },
  },
  {
    _id: false,
  }
);
