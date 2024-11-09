import { VoteDTO } from "../dtos/VoteDTO";

export interface PollOption {
    name : string;
}

export class Poll {
    id : string;
    name : string;
    options : PollOption[];
    votes: VoteDTO[];

    constructor(id: string, name: string, options: PollOption[], votes: VoteDTO[]) {
        this.id = id;
        this.name = name;
        this.options = options;
        this.votes = votes;
    }
}

