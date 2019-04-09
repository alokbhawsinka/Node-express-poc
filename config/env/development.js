/* eslint-disable no-underscore-dangle */
/**
 * Expose
 */

module.exports = {
  _db: process.env.MONGODB_URL || 'mongodb://localhost:27017/testpoc',
  get db() {
    return this._db;
  },
  set db(value) {
    this._db = value;
  },
};
