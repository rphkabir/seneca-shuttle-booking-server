
import express from 'express';

import { createSchedule, getAllSchedule,cancelschedules, filterschedulesByOrigin, filterschedulesByDestination } from '../controllers/schedulController';


const router = express.Router();

// schedule Routes

router.post('/schedule', verifyAuth, createSchedule);
router.get('/schedule', verifyAuth, getAllSchedule);
router.patch('/schedule/:schedulesId', verifyAuth, cancelschedules);
router.get('/schedule/origin', verifyAuth, filterschedulesByOrigin);
router.get('/schedule/destination', verifyAuth, filterschedulesByDestination);

export default router;