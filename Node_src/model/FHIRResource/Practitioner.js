const mongoose = require('mongoose');
const Identifier = require('../FHIRModels/Identifier');
const HumanName = require('../FHIRModels/HumanName');
const ContactPoint = require('../FHIRModels/ContactPoint');
const Address = require('../FHIRModels/Address');
const Attachment = require('../FHIRModels/Attachment');
const Practitioner_Qualification = require('../FHIRModels/Practitioner_Qualification');
const CodeableConcept = require('../FHIRModels/CodeableConcept');
module.exports = function () {
  const Practitioner = {
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
    active: {
      type: Boolean,
      default: void 0,
    },
    name: {
      type: [HumanName],
      default: void 0,
    },
    telecom: {
      type: [ContactPoint],
      default: void 0,
    },
    address: {
      type: [Address],
      default: void 0,
    },
    gender: {
      type: String,
      default: void 0,
    },
    birthDate: {
      type: Date,
      default: void 0,
    },
    photo: {
      type: [Attachment],
      default: void 0,
    },
    qualification: {
      type: [Practitioner_Qualification],
      default: void 0,
    },
    communication: {
      type: [CodeableConcept],
      default: void 0,
    },
  };
  const PractitionerSchema = new mongoose.Schema(Practitioner, {
    _id: false,
  });

  const PractitionerModel = mongoose.model('Practitioner', PractitionerSchema);

  return PractitionerModel;
};
