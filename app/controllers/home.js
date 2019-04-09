/*!
 * Module dependencies.
 */
const Cateory = require('../../app/models/category');

exports.index = (req, res) => {
  const a = { name: 'Alok', Age: '37' };
  res.send(a);
};

exports.hello = (req, res) => {
  const a = { name: 'Alok', Age: '37', is_Active: '1' };
  res.send(a);
};

exports.categoryList = async (req, res, next) => {
  try {
    console.log('In Get List');
    const categories = await Cateory.find().exec();
    res.send(categories);
  } catch (err) {
    next(err);
  }
  return true;
};

exports.createCategory = (req, res, next) => {
  Cateory.create(req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
    return true;
  });
};
