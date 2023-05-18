import express from 'express';

import { getAllEntries, createEntry } from '../controllers/entry';

const router = express.Router();

router.get('/', getAllEntries);
router.post('/', createEntry);


export default router;