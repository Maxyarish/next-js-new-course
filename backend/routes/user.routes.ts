import express from "express";
import {loginSchema, registerSchema} from '../validators/user.validator';
import {validate} from '../middlewares/validate.mw';
import { getAccount, getAllUsers, loginUser, registerUser } from "../controllers/user.controller";
import { auth,isAdmin } from "../middlewares/auth.mw";

const router= express.Router();

router.post('/register',validate(registerSchema),registerUser)
router.post('/login',validate(loginSchema),loginUser)
router.get('/',auth,isAdmin,getAllUsers)
router.get('/account',auth,getAccount)


export default router;
