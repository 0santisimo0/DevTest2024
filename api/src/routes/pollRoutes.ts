import express from 'express';
import { createNewPoll, getAllPolls, votePoll } from "../controllers/pollsController"

const router = express.Router();

router.get("/v1/polls", getAllPolls)
router.post("/v1/polls", createNewPoll)
router.post("/v1/polls/:id", votePoll)

export default router;