const mongoose = require('mongoose');
const Identifier = require('../FHIRModels/Identifier');
const Reference = require('../FHIRModels/Reference');
const Device_UdiCarrier = require('../FHIRModels/Device_UdiCarrier');
const CodeableConcept = require('../FHIRModels/CodeableConcept');
const Device_DeviceName = require('../FHIRModels/Device_DeviceName');
const Device_Specialization = require('../FHIRModels/Device_Specialization');
const Device_Version = require('../FHIRModels/Device_Version');
const Device_Property = require('../FHIRModels/Device_Property');
const ContactPoint = require('../FHIRModels/ContactPoint');
const Annotation = require('../FHIRModels/Annotation');
module.exports = function () {
  const Device = {
    id: {
      type: String,
      unique: true,
      index: true,
    },
    resourceType: {
      type: String,
      required: true,
    },
    identifier: {
      type: [Identifier],
      default: void 0,
    },
    definition: {
      type: Reference,
      default: void 0,
    },
    udiCarrier: {
      type: [Device_UdiCarrier],
      default: void 0,
    },
    status: {
      type: String,
      default: void 0,
    },
    statusReason: {
      type: [CodeableConcept],
      default: void 0,
    },
    distinctIdentifier: {
      type: String,
      default: void 0,
    },
    manufacturer: {
      type: String,
      default: void 0,
    },
    manufactureDate: {
      type: Date,
      default: void 0,
    },
    expirationDate: {
      type: Date,
      default: void 0,
    },
    lotNumber: {
      type: String,
      default: void 0,
    },
    serialNumber: {
      type: String,
      default: void 0,
    },
    deviceName: {
      type: [Device_DeviceName],
      default: void 0,
    },
    modelNumber: {
      type: String,
      default: void 0,
    },
    partNumber: {
      type: String,
      default: void 0,
    },
    type: {
      type: CodeableConcept,
      default: void 0,
    },
    specialization: {
      type: [Device_Specialization],
      default: void 0,
    },
    version: {
      type: [Device_Version],
      default: void 0,
    },
    property: {
      type: [Device_Property],
      default: void 0,
    },
    patient: {
      type: Reference,
      default: void 0,
    },
    owner: {
      type: Reference,
      default: void 0,
    },
    contact: {
      type: [ContactPoint],
      default: void 0,
    },
    location: {
      type: Reference,
      default: void 0,
    },
    url: {
      type: String,
      default: void 0,
    },
    note: {
      type: [Annotation],
      default: void 0,
    },
    safety: {
      type: [CodeableConcept],
      default: void 0,
    },
    parent: {
      type: Reference,
      default: void 0,
    },
  };
  const DeviceSchema = new mongoose.Schema(Device);

  const DeviceModel = mongoose.model('Device', DeviceSchema);

  return DeviceModel;
};
