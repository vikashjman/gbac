import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/groups.entity'; // assuming you have a Group entity defined
import { GroupAction } from "./entities/group-actions.entity";
import { Action } from "./entities/actions.entity";

@Injectable()
export class GroupsService {
    constructor(
        @InjectRepository(Group)
        private groupRepo: Repository<Group>,
        @InjectRepository(GroupAction)
        private groupActionRepo: Repository<GroupAction>,
        @InjectRepository(Action)
        private actionRepo: Repository<Action>,
    ) { }


    createGroup(groupName: string, groupDesc: string): Promise<Group> {
        const group = this.groupRepo.create({ groupName, groupDesc });
        return this.groupRepo.save(group);
    }

    createAction(actionName: string, actionDesc: string): Promise<Action> {
        const action = this.actionRepo.create({ actionName, actionDesc });
        return this.actionRepo.save(action);
    }

    async findAllActions(groupId: number): Promise<Action[]> {
        const groupActions = await this.groupActionRepo.find({
            where: { groupId },
            relations: ["action"]
        });

        return groupActions.map(groupAction => groupAction.action);
    }

    async createGroupAction(groupId:number, actionId:number){
        const groupActions = this.groupActionRepo.create({groupId, actionId});
        return this.groupActionRepo.save(groupActions);
    }

}