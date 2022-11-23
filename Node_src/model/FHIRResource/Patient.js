const mongoose = require('mongoose');
const Identifier = require('../FHIRModels/Identifier');
const HumanName = require('../FHIRModels/HumanName');
const ContactPoint = require('../FHIRModels/ContactPoint');
const Address = require('../FHIRModels/Address');
const CodeableConcept = require('../FHIRModels/CodeableConcept');
const Attachment = require('../FHIRModels/Attachment');
const Patient_Contact = require('../FHIRModels/Patient_Contact');
const Patient_Communication = require('../FHIRModels/Patient_Communication');
const Reference = require('../FHIRModels/Reference');
const Patient_Link = require('../FHIRModels/Patient_Link');
module.exports = function () {
  const Patient = {
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
    gender: {
      type: String,
      default: void 0,
    },
    birthDate: {
      type: Date,
      default: void 0,
    },
    deceasedBoolean: {
      type: Boolean,
      default: void 0,
    },
    deceasedDateTime: {
      type: String,
      default: void 0,
    },
    address: {
      type: [Address],
      default: void 0,
    },
    maritalStatus: {
      type: CodeableConcept,
      default: void 0,
    },
    multipleBirthBoolean: {
      type: Boolean,
      default: void 0,
    },
    multipleBirthInteger: {
      type: Number,
      default: void 0,
    },
    photo: {
      type: [Attachment],
      default: void 0,
    },
    contact: {
      type: [Patient_Contact],
      default: void 0,
    },
    communication: {
      type: [Patient_Communication],
      default: void 0,
    },
    generalPractitioner: {
      type: [Reference],
      default: void 0,
    },
    managingOrganization: {
      type: Reference,
      default: void 0,
    },
    link: {
      type: [Patient_Link],
      default: void 0,
    },
  };
  const PatientSchema = new mongoose.Schema(Patient);

  const PatientModel = mongoose.model('Patient', PatientSchema);

  return PatientModel;
};
