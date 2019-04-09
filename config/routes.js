/* eslint-disable no-bitwise */


/**
 * Module dependencies.
 */

const home = require('../app/controllers/home');

/**
 * Expose
 */

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.get('/', home.index);
  app.get('/hello', home.hello);
  app.get('/api/category', home.categoryList);
  app.post('/api/newcategory', home.createCategory);

  /**
   * Error handling
   */

  app.use((err, req, res, next) => {
    // treat as 404
    if (
      err.message
      && (~err.message.indexOf('not found')
        || ~err.message.indexOf('Cast to ObjectId failed'))
    ) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
    return true;
  });

  // assume 404 since no middleware responded
  app.use((req, res) => {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found',
    });
  });
};
