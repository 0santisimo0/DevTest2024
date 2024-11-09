import axios from "axios";
import { PollDTO, VoteDTO } from "../interfaces/interfaces";

const API_URL = 'http://localhost:3000/api';

export const fetchPolls = async () => {
    const response = await axios.get(`${API_URL}/v1/polls`);
    return response.data;
}

export const createPoll = async (poll : PollDTO) => {
    const request = await axios.post(`${API_URL}/v1/polls`, poll);
    return request.data;
}

export const votePoll = async (vote : VoteDTO) => {
    const request = await axios.post(`${API_URL}/v1/polls/:id`, vote);
    return request.data;
}