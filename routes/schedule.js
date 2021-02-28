
import express from 'express';

import { createSchedule, getAllSchedule,cancelschedules, filterschedulesByOrigin, filterschedulesByDestination } from '../controllers/schedulController';


const router = express.Router();

// schedule Routes

router.post('/schedule',  createSchedule);
router.get('/schedule', getAllSchedule);
router.patch('/schedule/:schedulesId',  cancelschedules);
router.get('/schedule/origin',  filterschedulesByOrigin);
router.get('/schedule/destination',  filterschedulesByDestination);

export default router;