const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ['open', 'in-progress', 'resolved'], default: 'open' }
}, { timestamps: true });

module.exports = mongoose.model('Bug', bugSchema);
