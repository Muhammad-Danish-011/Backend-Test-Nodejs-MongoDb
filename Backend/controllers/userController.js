const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserHistory = async (req, res) => {
  try {
    const userHistory = [];  
    res.status(200).json(userHistory);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


const Result = require('../models/Result');  
const saveResult = async (req, res) => {
  try {
    const { quizId, score, totalQuestions } = req.body;

    const result = new Result({
      quizId,
      score,
      totalQuestions,
      date: new Date(), 
    });

    await result.save();

    res.status(201).json({
      message: 'Result saved successfully',
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error saving result',
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUserHistory,
  saveResult,  
};

