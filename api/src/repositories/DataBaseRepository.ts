import { CreatePollDto } from "../dtos/CreatePollDTO";
import { Poll } from "../interfaces/Poll";
import { IStorageRepository } from "./IStorageRepository";

class DataBaseRepository implements IStorageRepository{
    getAllPolls(): Promise<Poll[]> {
        throw new Error("Method not implemented.");
    }
    createPoll(poll: CreatePollDto): Promise<Poll> {
        throw new Error("Method not implemented.");
    }
    votePoll(id: string): Promise<Poll> {
        throw new Error("Method not implemented.");
    }

}