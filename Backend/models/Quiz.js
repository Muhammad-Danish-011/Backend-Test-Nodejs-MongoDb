const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: String,
});

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',  
    required: true
  },
  questions: [QuestionSchema]
});

const Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;
