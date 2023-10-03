import * as Joi from "joi";


export const POSTGRES_CONFIG = {
    POSTGRES_HOST:      Joi.string().required(),
    POSTGRES_PORT:      Joi.string().default(5432),
    POSTGRES_USERNAME:  Joi.string().required(),
    POSTGRES_PASSWORD:  Joi.string().required(),
    POSTGRES_DATABASE:  Joi.string().required()
}
