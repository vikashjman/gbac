import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/users.entity";
import { Repository } from "typeorm";
import { Group } from "src/groups/entities/groups.entity";
import { UserGroup } from "./entities/users-group.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
        @InjectRepository(UserGroup)
        private userGroupRepo: Repository<UserGroup>,
    ) { }

    createUser(name: string, email: string, password: string) {
        const user = this.userRepo.create({ name, email, password });
        return this.userRepo.save(user)
    }

    createUserGroup(groupId: number, userId: number) {
        const userGroup = this.userGroupRepo.create({ userId, groupId });
        return this.userGroupRepo.save(userGroup);
    }

    async userBelongToGroups(userId: number) {
        const user = await this.userRepo.findOne({ where: { userId }, relations: ['userGroups', 'userGroups.group'] });
        return user ? user.userGroups.map(userGroup => userGroup.group) : null;
    }

    async getUserActions(userId: number) {
        const user = await this.userRepo.findOne({ where: { userId }, relations: ['userGroups', 'userGroups.group', 'userGroups.group.groupActions', 'userGroups.group.groupActions.action'] });
        if (!user) return null;

        // Flatten the actions from all groups into a single array
        const actions = user.userGroups.reduce((acc, userGroup) => [...acc, ...userGroup.group.groupActions.map(groupAction => groupAction.action)], []);
        // return actions;
        const actionMap = {};
        actions.forEach(action => {
            actionMap[action.actionId] = action;
        });

        const uniqueActions = Object.values(actionMap);
        return uniqueActions;
    }
}