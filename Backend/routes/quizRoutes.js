const express = require('express');
const { getCategories, attemptQuiz, getResults } = require('../controllers/quizController');
const router = express.Router();
const quizController = require('../controllers/quizController');


router.get('/categories', getCategories);
router.post('/attempt', attemptQuiz);
router.get('/results/:userId', getResults);
router.post('/', quizController.createQuiz);


router.put('/:quizId', quizController.updateQuiz);
router.delete('/:quizId', quizController.deleteQuiz);

module.exports = router;


module.exports = router;
