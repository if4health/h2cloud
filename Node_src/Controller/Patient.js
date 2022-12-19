const PatientService = require('../Service/Patient');

class PatientController {
  async create(req, res) {
    res.json(await PatientService.create(req.body));
  }

  async find(req, res) {
    res.json(await PatientService.find());
  }

  async findById(req, res) {
    res.json(await PatientService.findById(req.params.id));
  }
  async remove(req, res) {
    res.json(await PatientService.remove(req.params.id));
  }
}

module.exports = new PatientController();
