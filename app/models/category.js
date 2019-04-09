/*!
 * Module dependencies
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  id: {
    type: Number,
    required: true,
    trim: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  parent_id: {
    type: Number,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('Category', categorySchema);
