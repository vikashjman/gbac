import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GroupAction } from "./group-actions.entity";

@Entity()
export class Action{
    @PrimaryGeneratedColumn()
    actionId: number;

    @Column()
    actionName: string;

    @Column()
    actionDesc: string;

    @OneToMany(() => GroupAction, groupAction => groupAction.action)
    groupActions: GroupAction[];
}