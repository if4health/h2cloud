const router = require('express').Router();
const jose = require('jose');
const set_data = require('./class');

const pacientesRouter = require('./router/pacientes');

const patientRouter = require('./router/Patient');
const observationRouter = require('./router/observation');
const deviceRouter = require('./router/Device');

const authRouter = require('./router/auth');

const { verifyJWT } = require('./utils/auth2');

const wellKnown = require('./utils/wellKnown');
const openId = require('./utils/openId');
const metadata = require('./utils/metadata');
const { getPublicKey } = require('./utils/keys');

router.use('/auth', authRouter);

router.use('/Paciente', verifyJWT, pacientesRouter);

router.use('/Patient', verifyJWT, patientRouter);
router.use('/Observation', verifyJWT, observationRouter);
router.use('/Device', verifyJWT, deviceRouter);

router.get('/render', (req, res) => {
  const data = new set_data(req.query['id']);

  res.json({ res: JSON.parse(data.getShaHead()) });
});

router.get('/dashboard', (req, res) => {
  res.render('index');
});

router.get('/.well-known/smart-configuration', (req, res) => {
  res.json(wellKnown);
});

router.get('/.well-known/openid-configuration', (req, res) => {
  res.json(openId);
});

router.get('/key', async (req, res) => {
  const file = getPublicKey();
  const key = await jose.importSPKI(file.toString(), 'RS256');
  res.json(await jose.exportJWK(key));
});

router.get('/metadata', (req, res) => {
  res.json(metadata);
});

router.get('/', (req, res) => {
  res.json({ res: res.statusCode });
});

module.exports = router;
