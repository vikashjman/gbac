import { IsNumber } from "class-validator";


export class CreateGroupActionDto{
    @IsNumber()
    groupId: number;

    @IsNumber()
    actionId: number;
}