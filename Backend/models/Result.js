const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
  },
  score: {
    type: Number,
    required: true,
  },
  attemptedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Result', ResultSchema);
