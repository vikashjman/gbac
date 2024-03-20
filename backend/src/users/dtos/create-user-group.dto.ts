import { IsNumber } from "class-validator";


export class CreateUserGroupDto{
    @IsNumber()
    groupId: number;

    @IsNumber()
    userId: number;
}