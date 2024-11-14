const Joi = require('joi');

exports.quizValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    category: Joi.string().required(),
    questions: Joi.array().items(
      Joi.object({
        questionText: Joi.string().required(),
        options: Joi.array().items(
          Joi.object({
            text: Joi.string().required(),
            isCorrect: Joi.boolean().required(),
          })
        ).min(2)
      })
    ).min(1)
  });
  return schema.validate(data);
};
