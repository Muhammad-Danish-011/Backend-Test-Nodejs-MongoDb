const Result = require('../models/Result');

exports.getQuizHistory = async (userId) => {
  return await Result.find({ userId }).populate('quizId', 'title category');
};
