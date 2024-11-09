import { useQuery } from "@tanstack/react-query";
import { Poll } from "../interfaces/interfaces";
import { fetchPolls } from "../services/pollService";


export const usePoll = () => {
    return useQuery<Poll[]>({
        queryKey: ['polls'],
        queryFn: fetchPolls
    })
}