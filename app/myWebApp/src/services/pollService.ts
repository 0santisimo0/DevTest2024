import axios from "axios";
import { Poll } from "../interfaces/interfaces";

const API_URL = 'http://localhost:3000/api';

export const fetchPolls = async () => {
    const response = await axios.get(`${API_URL}/v1/polls`);
    return response.data;
}

export const createPoll = async (poll : Poll) => {
    const request = await axios.post(`${API_URL}/v1/polls`, poll);
    return request.data;
}