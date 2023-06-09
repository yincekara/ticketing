import express = require('express');
import 'express-async-errors';
import {json} from 'body-parser';
import mongoose from 'mongoose';

import {currentUserRouter} from './routes/currentuser';
import {signinRouter} from './routes/signin';
import {signoutRouter} from './routes/signout';
import {signupRouter} from './routes/signup';
import {errorhandler} from "./middlewares/errorhandler";
import {NotFoundError} from "./errors/notfounderror";

const app = express();
app.use(json());

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
        console.log('Listening on port 3000!!!!!!!!');
    });
};

start();