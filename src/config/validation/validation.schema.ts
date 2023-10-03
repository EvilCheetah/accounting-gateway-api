import * as Joi from "joi";
import { POSTGRES_CONFIG } from "./schema/postgres.schema";


export const validation_schema = Joi.object({
    ...POSTGRES_CONFIG
});


export default validation_schema;