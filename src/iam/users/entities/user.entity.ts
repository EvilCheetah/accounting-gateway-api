import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { BaseEntity } from "src/database/base.entity";


@Entity()
export class User extends BaseEntity
{
    @PrimaryKey()
    user_id: number;

    @Property({ unique: true })
    username: string;

    @Property({ unique: true })
    email:    string;

    @Property({ unique: true })
    password: string;
}
