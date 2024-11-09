export interface PollOption {
    name : string;
}

export interface VoteDTO {
    optionId: string;
    voterEmail: string;
}

export interface Poll {
    id : string;
    name : string;
    options : PollOption[];
    votes : VoteDTO[];
}


export interface PollDTO {
    name : string;
    options : PollOption[];
    votes : VoteDTO[];
}
