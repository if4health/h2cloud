const router = require('express').Router();

const observationController = require('../Controller/Observation');

router.get('/', (req, res) => {
  observationController.getObservation(req, res);
});

router.get('/:id', (req, res) => {
  observationController.getObservationById(req, res);
});

router.post('/', (req, res) => {
  observationController.createObeservation(req, res);
});

module.exports = router;
