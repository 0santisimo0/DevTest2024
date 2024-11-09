import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from "class-validator";
import { PollOption } from "../interfaces/Poll";
import { VoteDTO } from './VoteDTO';

export class CreatePollDto {
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsNotEmpty()
    options: PollOption[];

    @IsNotEmpty()
    votes: VoteDTO[];
}