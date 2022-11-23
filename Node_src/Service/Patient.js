const PatientDatabase = require('../model/FHIRResource/Patient')();
const PractitionerDatabase = require('../model/FHIRResource/Practitioner')();

class PatientService {
  async create(patient) {
    try {
      const result = await PatientDatabase.create(patient);
      return result;
    } catch (e) {
      return e;
    }
  }

  async findPatientByPractitioner(medico) {
    const practitioner = await PractitionerDatabase.findOne({
      'identifier.value': medico,
      'identifier.system': 'own',
    });
    if (!practitioner) return [];
    const patients = await PatientDatabase.find({
      'generalPractitioner.reference': `local/${practitioner.id}`,
    });
    const pacientes = patients.map((patient) => ({
      id: patient._id,
      name: `${patient.name[0].use} ${patient.name[0].family}`,
    }));
    return pacientes;
  }

  async find() {
    try {
      const result = await PatientDatabase.find();
      return result;
    } catch (e) {
      return e;
    }
  }

  async findOne() {
    try {
      const result = await PatientDatabase.findOne();
      return result;
    } catch (e) {
      return e;
    }
  }

  async findById(id) {
    try {
      const result = await PatientDatabase.findById(id);
      return result;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async remove(id) {
    try {
      const result = await PatientDatabase.deleteOne(id);
      return result;
    } catch (e) {
      return e;
    }
  }
}

module.exports = new PatientService();
