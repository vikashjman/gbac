import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Group } from "./groups.entity"; // assuming you have a Group entity defined
import { Action } from "./actions.entity"; // assuming you have an Action entity defined

@Entity()
export class GroupAction {
  @PrimaryColumn()
  groupId: number;

  @PrimaryColumn()
  actionId: number;

  @ManyToOne(() => Group, (group) => group.groupActions)
  @JoinColumn({ name: "groupId" })
  group: Group;

  @ManyToOne(() => Action, (action) => action.groupActions)
  @JoinColumn({ name: "actionId" })
  action: Action;
}