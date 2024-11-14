const Joi = require('joi');

exports.updateUserValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    email: Joi.string().email(),
  });
  return schema.validate(data);
};
