import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupsService } from './groups.service';
import { CreateActionDto } from './dto/create-action.dto';
import { CreateGroupActionDto } from './dto/create-group-action.dto';

@Controller('groups')
export class GroupsController {
    constructor(
        private groupsService: GroupsService,
    ) { }

    @Post()
    async createGroup(@Body() body: CreateGroupDto) {
        const group = await this.groupsService.createGroup(body.groupName, body.groupDesc);
        return group;
    }

    @Post('actions')
    async createAction(@Body() body: CreateActionDto) {
        const action = await this.groupsService.createAction(body.actionName, body.actionDesc);
        return action;
    }

    @Post('add-action')
    async addGroupAction(@Body() body: CreateGroupActionDto) {
        const groupAction = await this.groupsService.createGroupAction(body.groupId, body.actionId);
        return groupAction;
    }

    @Get("actions/:groupId")
    async getListOfAction(@Param("groupId") groupId: string) {
        const actions = this.groupsService.findAllActions(parseInt(groupId));
        return actions;
    }
}
