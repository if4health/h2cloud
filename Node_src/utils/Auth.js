const jwt = require('jsonwebtoken');
const { getPublicKey } = require('./keys');

function checkScope(scopes) {
  const arrayScopes = scopes.split(' ');
  const permission = [false, '', false, false, false, false, false];
  arrayScopes.forEach((scope) => {
    if (scope.includes('/') && !scope.includes('launch')) {
      const splitScope = scope.split('/');
      const checkPermission = splitScope[1].split('.');
      if (splitScope[0] === 'patient') {
        permission[0] = true;
      }
      permission[1] = checkPermission[0];
      const splitPermissions = checkPermission[1].split('');
      splitPermissions.forEach((element) => {
        const mapping = {
          c: 2,
          r: 3,
          u: 4,
          d: 5,
          s: 6,
        };
        permission[mapping[element]] = true;
      });
    } else if (scope === 'launch/patient') {
      permission[0] = true;
      permission[1] = 'Patient';
      permission[3] = true;
      permission[6] = true;
    }
  });

  return permission;
}

module.exports.checkScope = checkScope;

module.exports.verifyJWT = function verifyJWT(req, res, next) {
  if (process.env.ENV === 'unsafe') {
    next();
    return;
  }
  const token = req.headers['authorization'];
  if (!token)
    return res.status(401).json({ auth: false, message: 'No token provided.' });
  const key = getPublicKey();
  const code = token.split(' ')[1];
  jwt.verify(code, key, function (err, decoded) {
    if (err) {
      console.log(err);
      return res
        .status(401)
        .json({ auth: false, message: 'Failed to authenticate token.' });
    }
    let array = [true, 'Patient', false, true, false, false, false];
    if (decoded.scope !== undefined) {
      array = checkScope(decoded.scope);
    }
    if (array[0] && decoded.patient === undefined) {
      return res
        .status(401)
        .json({ auth: false, message: 'Token is missing info.' });
    }
    const resourceId = req.originalUrl.split('/');
    /*if (array[1] !== '*' && !req.originalUrl.includes(array[1])) {
      return res
        .status(401)
        .json({ auth: false, message: 'Scope not allowed to this route.' });
    }*/
    if (!array[2] && req.method === 'POST') {
      return res.status(401).json({
        auth: false,
        message: 'Scope does not have write permission.',
      });
    }
    if (!array[3]) {
      return res.status(401).json({
        auth: false,
        message: 'Scope does not have read permission.',
      });
    }
    if (!array[4] && req.method === 'PUT') {
      return res.status(401).json({
        auth: false,
        message: 'Scope does not have update permission.',
      });
    }
    if (!array[5] && req.method === 'DELETE') {
      return res.status(401).json({
        auth: false,
        message: 'Scope does not have delete permission.',
      });
    }
    if (!array[6] && resourceId === '') {
      return res.status(401).json({
        auth: false,
        message: 'Scope does not have search permission.',
      });
    }
    /*if (
      array[0] &&
      resourceId !== '' &&
      decoded.patient !== resourceId[resourceId.length - 1]
    ) {
      return res.status(401).json({
        auth: false,
        message: 'Token not authorized for this resource.',
      });
    }*/
    next();
  });
};
