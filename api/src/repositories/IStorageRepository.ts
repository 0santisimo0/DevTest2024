import { CreatePollDto } from "../dtos/CreatePollDTO";
import { VoteDTO } from "../dtos/VoteDTO";
import { Poll } from "../interfaces/Poll";

export interface IStorageRepository {
    getAllPolls() : Promise<Poll[]>;
    createPoll(poll : CreatePollDto): Promise<Poll>;
    votePoll(id : string, vote : VoteDTO): Promise<Poll>;
}