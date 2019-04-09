/* eslint-disable no-underscore-dangle */
/**
 * Module dependencies.
 */

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

/**
 * Expose
 */

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(bodyParser.json());
  app.use(
    methodOverride((req) => {
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        const method = req.body._method;
        delete req.body._method;
        return method;
      }
    }),
  );
};
