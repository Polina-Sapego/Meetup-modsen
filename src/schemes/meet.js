const Joi = require("joi");

const meetScheme = {
    createmeetScheme: Joi.object().keys({
      name: Joi.string()
      .min(2)
      .max(255)
      .required(),
    description: Joi.string()
    .min(3)
    .max(255),
    tags: Joi.string()
    .min(2)
    .max(255),
    location: Joi.string()
    .min(2)
    .max(255)
    .required(),
    time: Joi.date()
    //.format("YYYY-MM-DD")
    .raw()
    .required(),

    }),


    updatemeetScheme: Joi.object().keys({
      name: Joi.string()
      .min(2)
      .max(255)
      .required(),
    description: Joi.string()
    .min(3)
    .max(255),
    tags: Joi.string()
    .min(2)
    .max(255),
    location: Joi.string()
    .min(2)
    .max(255)
    .required(),
    time: Joi.date()
    //.format("YYYY-MM-DD")
    .required(),

    })

}

module.exports = meetScheme;
