import { Router } from "express";
import { addAuth, authById, getAuths, removeAuth, updateAuth } from "../controllers/task.controller.js";
const router = Router();

router.get('/', getAuths);
router.get('/:id', authById);

router.post('/add', addAuth);

router.put('/:id', updateAuth);

router.delete('/:id', removeAuth);

export default router;