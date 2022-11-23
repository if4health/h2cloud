const router = require('express').Router();

const AuthController = require('../Controller/Auth');

router.all('/register', (req, res) => {
  AuthController.register(req, res);
});

router.get('/login', (req, res) => {
  AuthController.login(req, res);
});

router.post('/login', (req, res) => {
  AuthController.postLogin(req, res);
});

router.get('/list', (req, res) => {
  AuthController.list(req, res);
});

router.post('/select', (req, res) => {
  AuthController.select(req, res);
});

router.get('/authorize', (req, res) => {
  AuthController.authorize(req, res);
});

router.post('/authorize', (req, res) => {
  AuthController.postAuthorize(req, res);
});

router.post('/token', (req, res) => {
  AuthController.token(req, res);
});

module.exports = router;
