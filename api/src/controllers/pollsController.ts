import { Request, Response, RequestHandler } from 'express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { PollService } from '../services/pollService';
import { MemoryStorageRepository } from '../repositories/MemoryStorageRepository';
import { CreatePollDto } from '../dtos/CreatePollDTO';
import { error } from 'console';

const pollService = new PollService(new MemoryStorageRepository())

export const getAllPolls: RequestHandler = async (req: Request, res: Response) => {
    try {
        const polls = await pollService.getAllPolls();
        res.json(polls);
    } catch (error) {
        res.status(500).json({message: "Error retriving polls"})
    }
}

export const createNewPoll : RequestHandler = async (req: Request, res: Response) => {
    try {
        const pollDto = plainToClass(CreatePollDto, req.body);
        const validationErrors = await validate(pollDto);

        if (validationErrors.length > 0) {
            res.status(400).json({errors: validationErrors})
        } else {
            const newPoll = await pollService.createNewPoll(pollDto);
            res.status(201).json(newPoll);
        }
    } catch (error) {
        res.status(500).json({message: "Error adding poll"})
    }
}

export const votePoll: RequestHandler = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {optionId, voterEmail} = req.body;
        const polls = await pollService.votePoll(id, {optionId, voterEmail});
        res.status(200).json(polls);
    } catch (error) {
        res.status(500).json({message: "Error voting poll"})
    }
}