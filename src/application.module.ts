import { Module } from '@nestjs/common';
import { IamModule } from './iam/iam.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';


@Module({
    imports: [
        ConfigModule,
        DatabaseModule,
        IamModule
    ]
})
export class ApplicationModule {}
