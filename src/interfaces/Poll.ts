import { VoteDTO } from "../dtos/VoteDTO";

export interface PollOption {
    id : string; 
    name : string;
    votes : number;
}

export class Poll {
    id : string;
    name : string;
    options : PollOption[];
    votes: VoteDTO[];

    constructor(id: string, name: string, options: PollOption[]) {
        this.id = id;
        this.name = name;
        this.options = options;
        this.votes = [];
    }
}

