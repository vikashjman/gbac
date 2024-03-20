import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Group } from '../../groups/entities/groups.entity'; // import your Group entity
import { UserGroup } from "./users-group.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => UserGroup, userGroup => userGroup.user)
    userGroups: UserGroup[];

}