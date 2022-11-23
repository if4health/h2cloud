const router = require('express').Router();

const PatientController = require('../Controller/Patient');

router.get('/', (req, res) => {
  PatientController.find(req, res);
});

router.get('/:id', (req, res) => {
  PatientController.findById(req, res);
});

router.post('/', (req, res) => {
  PatientController.create(req, res);
});

module.exports = router;
