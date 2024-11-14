const Quiz = require('../models/Quiz');
const Result = require('../models/Result');
const Category = require('../models/Category');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.attemptQuiz = async (req, res) => {
  const { userId, quizId, answers } = req.body;

  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === quiz.questions[index].correctAnswer) score++;
    });

    const result = new Result({ userId, quizId, score });
    await result.save();
    res.json({ score });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getResults = async (req, res) => {
  const { userId } = req.params;
  try {
    const results = await Result.find({ userId }).populate('quizId');
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.createQuiz = async (req, res) => {
  try {
    const { title, categoryName, questions } = req.body;

    let category = await Category.findOne({ name: categoryName });

    if (!category) {
      category = new Category({ name: categoryName });
      await category.save();
    }

    const newQuiz = new Quiz({
      title,
      category: category._id,  
      questions
    });

    await newQuiz.save();  

    res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.updateQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;
    const { title, category, questions } = req.body;

    let categoryDoc = await Category.findOne({ name: category });
    if (!categoryDoc) {
      categoryDoc = new Category({ name: category });
      await categoryDoc.save();
    }

    const updatedQuiz = await Quiz.findByIdAndUpdate(
      quizId,
      {
        title,
        category: categoryDoc._id,
        questions,
      },
      { new: true, runValidators: true }
    );

    if (!updatedQuiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    res.status(200).json({ message: 'Quiz updated successfully', quiz: updatedQuiz });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.deleteQuiz = async (req, res) => {
  const { quizId } = req.params;

  try {
    const deletedQuiz = await Quiz.findByIdAndDelete(quizId);

    if (!deletedQuiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};