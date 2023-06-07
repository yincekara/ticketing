import express = require('express');

import {Request, Response} from 'express';
import {body, validationResult} from 'express-validator';

const router = express.Router();

router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('e mail must be valid'),
    body('password')
        .trim()
        .isLength({min: 4, max: 20})
        .withMessage('Password between 4 and 20 characters')
], (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).send(errors.array());
    }
    console.log('Creating a user');
    res.send({});
});

export {router as signupRouter};

/*
import express = require('express');

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
    res.send('Hi there signup on local');
});

export {router as signupRouter};
*/