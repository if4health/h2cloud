const PacientesService = require('../service/pacientes');

class PacientesController {
  async create(req, res) {
    res.json(await PacientesService.create(req.body));
  }

  async find(req, res) {
    res.json(await PacientesService.find());
  }

  async findById(req, res) {
    res.json(await PacientesService.findById(req.params.id));
  }
  async remove(req, res) {
    res.json(await PacientesService.remove(req.params.id));
  }
}

module.exports = new PacientesController();
