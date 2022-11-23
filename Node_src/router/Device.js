const router = require('express').Router();

const DeviceController = require('../Controller/Device');

router.get('/', (req, res) => {
  DeviceController.find(req, res);
});

router.get('/:id', (req, res) => {
  DeviceController.findById(req, res);
});

router.post('/', (req, res) => {
  DeviceController.create(req, res);
});

module.exports = router;
