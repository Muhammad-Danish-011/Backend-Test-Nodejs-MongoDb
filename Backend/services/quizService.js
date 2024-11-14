const Quiz = require('../models/Quiz');
const Result = require('../models/Result');

exports.getAllCategories = async () => {
  return await Quiz.distinct('category');
};

exports.calculateScore = (quiz, answers) => {
  let score = 0;
  quiz.questions.forEach((question, idx) => {
    if (question.options[answers[idx]].isCorrect) score += 1;
  });
  return score;
};

exports.saveResult = async (userId, quizId, score) => {
  const result = new Result({ userId, quizId, score });
  return await result.save();
};
