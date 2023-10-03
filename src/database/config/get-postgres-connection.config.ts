import { MikroOrmModuleAsyncOptions } from "@mikro-orm/nestjs";
import { ConfigService } from "@nestjs/config";

import { ConfigModule } from "src/config/config.module";
import { User } from "src/iam/users/entities/user.entity";


export function get_postgres_connection(): MikroOrmModuleAsyncOptions
{
    return {
        useFactory: (config: ConfigService) => ({
            type:     'postgresql',
            host:      config.get<string>('POSTGRES_HOST'),
            port:      config.get<number>('POSTGRES_PORT'),
            user:      config.get<string>('POSTGRES_USERNAME'),
            password:  config.get<string>('POSTGRES_PASSWORD'),
            dbName:    config.get<string>('POSTGRES_DATABASE'),
            entities: [
                User
            ]
        }),
        imports: [ConfigModule],
        inject:  [ConfigService]
    }
}
