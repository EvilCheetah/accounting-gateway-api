import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { EncryptionModule } from "./encryption/encryption.module";
import { AuthenticationModule } from "./authentication/authentication.module";


@Module({
    imports: [
        AuthenticationModule,
        EncryptionModule,
        UsersModule
    ]
})
export class IamModule {}
