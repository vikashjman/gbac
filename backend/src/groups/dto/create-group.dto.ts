import { IsString } from "class-validator";

export class CreateGroupDto{
    @IsString()
    groupName: string;

    @IsString()
    groupDesc: string;
}