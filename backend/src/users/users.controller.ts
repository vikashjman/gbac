import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { CreateUserGroupDto } from './dtos/create-user-group.dto';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ){}

    @Post()
    async createUser(@Body() body: CreateUserDto){
        const user = await this.usersService.createUser(body.name, body.email, body.password);
        return user;
    }

    @Post('group')
    async createUserGroup(@Body() body: CreateUserGroupDto){
        const userGroup = await this.usersService.createUserGroup(body.groupId, body.userId);
        return userGroup;
    }

    @Get('/groups/:userId')
    async getGroupForUser(@Param('userId') userId:string){
        const groups = await this.usersService.userBelongToGroups(parseInt(userId));
        return groups;
    }   

    @Get('/actions/:userId')
    async getActionsForUser(@Param('userId') userId:string){
        const actions = await this.usersService.getUserActions(parseInt(userId));
        return actions;
    }
}
