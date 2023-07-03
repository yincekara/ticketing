import express = require('express');

import {Request, Response} from 'express';
import {body, validationResult} from 'express-validator';
mport {User} from "../models/user";
import {RequestValidationError} from "../errors/requestvalidationerror";
import {DatabaseConnectionError} from "../errors/databaseconnectionerror";

const router = express.Router();

router.post('/api/users/signup', [
        body('email')
            .isEmail()
            .withMessage('e mail must be valid'),
        body('password')
            .trim()
            .isLength({min: 4, max: 20})
            .withMessage('Password between 4 and 20 characters')
    ],
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
            //throw new Error('Invalid email or password');
            //return res.status(400).send(errors.array());
        }

        const {email, password} = req.body;
        const existingUser = await User.findOne({email});
        if (existingUser) {
            console.log('email in use');
            return res.send({});
        }

        const user = User.build({email, password});
        await user.save();
        res.status(201).send(user);
        /*
        console.log('Creating a user');
        throw new DatabaseConnectionError();
        //throw new Error('Error connecting to database');
        res.send({});
        */

    });

export {router as signupRouter};
