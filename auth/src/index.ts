import express = require('express');
import 'express-async-errors';
import {json} from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

import {currentUserRouter} from './routes/currentuser';
import {signinRouter} from './routes/signin';
import {signoutRouter} from './routes/signout';
import {signupRouter} from './routes/signup';
import {errorhandler} from "./middlewares/errorhandler";
import {NotFoundError} from "./errors/notfounderror";

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: true,
    })
);
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
//app.all('*', async (req, res, next) => {
app.all('*', async (req, res) => {
    //next(new NotFoundError());
    throw new NotFoundError();
});
app.use(errorhandler);

const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined');
    }
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            //useCreateIndex: true
        });
        console.log('Connected to MongoDb');
    } catch (err) {
        console.error(err);
    }
    app.listen(3000, () => {
        console.log('Listening on port 3000xy');
    });
};

start();