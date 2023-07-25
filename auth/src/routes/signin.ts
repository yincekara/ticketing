import express = require('express');
import {Request, Response} from 'express';
import {body} from 'express-validator';
import {validateRequest} from "../middlewares/validaterequests";

const router = express.Router();

router.post('/api/users/signin',
    [
        body('email')
            .isEmail()
            .withMessage('e mail must be valid'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('You must supply a password')
    ],
    validateRequest,
    (req: Request, res: Response) => {

    });

export {router as signinRouter};
