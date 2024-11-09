import { CreatePollDto } from "../dtos/CreatePollDTO";
import { Poll } from "../interfaces/Poll";
import { IStorageRepository } from "./IStorageRepository";
import { VoteDTO } from "../dtos/VoteDTO";

export class MemoryStorageRepository implements IStorageRepository {
    private polls : Poll[] = [];

    async getAllPolls(): Promise<Poll[]> {
        return this.polls;
    }
    async createPoll(poll: CreatePollDto): Promise<Poll> {
        const newPoll = new Poll(String(this.polls.length+1), poll.name, poll.options);
        this.polls.push(newPoll);
        return newPoll;
    }
    async votePoll(id: string, vote : VoteDTO): Promise<Poll> {
        const foundPoll = this.polls.find((poll) => poll.id === id);
        if (!foundPoll) {
            throw Error("Invalid")
        }

        const option = foundPoll.options.find((option) => option.id === vote.optionId);
        if (option) {
            option.votes += 1;
            
            foundPoll.votes.push(vote);
        }

        return foundPoll;
    }

}