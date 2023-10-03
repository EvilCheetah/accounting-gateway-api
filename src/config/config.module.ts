import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config"
import validationSchema from "./validation/validation.schema";


@Module({
    imports: [
        NestConfigModule.forRoot({
            validationSchema,
            validationOptions: { allowUnknown: true },
            envFilePath:        'environment/.env',
            expandVariables:     true
        })
    ],
    exports: [NestConfigModule]
})
export class ConfigModule {}
