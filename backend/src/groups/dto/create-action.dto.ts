import { IsString } from "class-validator";

export class CreateActionDto{
    @IsString()
    actionName: string;

    @IsString()
    actionDesc: string;
}