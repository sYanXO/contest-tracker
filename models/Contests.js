const mongoose = require('mongoose');

const ContestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  platform: { type: String, required: true },
  startTime: { type: Date, required: true },
  duration: { type: Number, required: true },
  url: { type: String, required: true },
  isBookmarked: { type: Boolean, default: false },
});

module.exports = mongoose.model('Contest', ContestSchema);