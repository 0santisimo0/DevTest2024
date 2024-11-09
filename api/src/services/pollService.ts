import { CreatePollDto } from "../dtos/CreatePollDTO";
import { VoteDTO } from "../dtos/VoteDTO";
import { Poll } from "../interfaces/Poll";
import { IStorageRepository } from "../repositories/IStorageRepository";

export class PollService {

    private repository : IStorageRepository;

    constructor(repository : IStorageRepository) {
        this.repository = repository;
    }

    async getAllPolls() : Promise<Poll[]> {
        return this.repository.getAllPolls();
    }

    async createNewPoll(poll : CreatePollDto) {
        return this.repository.createPoll(poll);
    }

    async votePoll(id : string ,vote : VoteDTO) {
        return this.repository.votePoll(id, vote);
    }
}