const DeviceService = require('../Service/Device');

class DeviceController {
  async create(req, res) {
    res.json(await DeviceService.create(req.body));
  }
}

module.exports = new DeviceController();
