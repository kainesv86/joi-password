const joi = require('joi');
const { joiPassword } = require('joi-password');

const schema = (input) =>
      joi
            .object({
                  username: joi.string().min(5).max(200).required(),
                  password: joiPassword
                        .string()
                        .minOfSpecialCharacters(2)
                        .minOfLowercase(2)
                        .minOfUppercase(2)
                        .minOfNumeric(2)
                        .noWhiteSpaces()
                        .required(),
            })
            .validate(input);

const { error } = schema({ username: 'hello', password: 'AAaa@@00' });
console.log(error); // undefined
