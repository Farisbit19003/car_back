import express from 'express';
import { login } from '../controller/user.controller';

const router = express.Router();

// User login route
router.post('/login', login);

export default router;
