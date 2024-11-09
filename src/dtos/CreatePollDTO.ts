import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from "class-validator";
import { PollOption } from "../interfaces/Poll";

export class CreatePollDto {
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsNotEmpty()
    options: PollOption[];
}