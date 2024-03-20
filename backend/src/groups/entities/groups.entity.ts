import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GroupAction } from "./group-actions.entity";
import { User } from "src/users/entities/users.entity";
import { UserGroup } from "src/users/entities/users-group.entity";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    groupId: number;

    @Column()
    groupName: string;

    @Column()
    groupDesc: string;

    @OneToMany(() => GroupAction, groupAction => groupAction.group)
    groupActions: GroupAction[];

    @OneToMany(() => UserGroup, userGroup => userGroup.group)
    userGroups: UserGroup[];
}