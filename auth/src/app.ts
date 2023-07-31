import express = require('express');
import 'express-async-errors';
import {json} from 'body-parser';
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

export {app};