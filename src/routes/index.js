import express from 'express';

import { index } from '../controller/index';
import { validateRule } from '../controller/validateRule';

import validation from '../middleware/validation';


const router = express.Router();

router.get('/', index);
router.post('/validate-rule', validation, validateRule);

export default router;
