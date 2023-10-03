import { Module } from "@nestjs/common";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { AnyEntity, EntityName } from "@mikro-orm/core";
import { get_postgres_connection } from "./config/get-postgres-connection.config";


@Module({
    imports: [
        MikroOrmModule.forRootAsync( get_postgres_connection() )
    ]
})
export class DatabaseModule
{
    static forFeature(entities: EntityName<AnyEntity>[])
    {
        return MikroOrmModule.forFeature(entities);
    }
}
