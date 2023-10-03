import * as dotenv from 'dotenv';
import { defineConfig } from "@mikro-orm/core";

import { User } from 'src/iam/users/entities/user.entity';


dotenv.config({ path: 'environment/.env' })


export default defineConfig({
    type:    'postgresql',
    host:     process.env.POSTGRES_HOST,
    port:    +process.env.POSTGRES_PORT,
    user:     process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    dbName:   process.env.POSTGRES_DATABASE,
    entities: [
        User
    ],
    migrations: {
        pathTs: './migrations'
    }
});