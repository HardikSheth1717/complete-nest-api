import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .required()
    .valid('development', 'staging', 'production')
    .default('development'),
  PORT: Joi.number().required().default(3000),
  DATABASE_CONNECTION: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_DATABASE: Joi.string().required(),
});
