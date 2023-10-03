import { Entity, PrimaryKey, Property } from "@mikro-orm/core";


@Entity()
export class Driver
{
    @PrimaryKey()
    driver_id: number;

    @Property()
    first_name:  string;

    @Property()
    middle_name: string;

    @Property()
    last_name:   string;
}
