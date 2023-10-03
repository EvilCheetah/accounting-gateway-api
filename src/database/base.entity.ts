import { Entity, Property } from "@mikro-orm/core";


@Entity({ abstract: true })
export abstract class BaseEntity
{
    @Property()
    create_at:  Date = new Date();

    @Property({ onUpdate: () => new Date() })
    updated_at: Date = new Date()
}
