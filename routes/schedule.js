import express from 'express';

import { schedule } from '../controllers/schedule.js'

const router = express.Router();

router.get('/',schedule );

export default router;