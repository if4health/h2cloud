const router = require('express').Router();

const PacientesController = require('../controller/pacientes');

router.get('/', (req, res) => {
  PacientesController.find(req, res);
});

router.get('/:id', (req, res) => {
  PacientesController.findById(req, res);
});

router.post('/', (req, res) => {
  PacientesController.create(req, res);
});

module.exports = router;
