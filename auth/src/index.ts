import express = require('express');

import {json} from 'body-parser';

import {currentUserRouter} from './routes/currentuser';
import {signinRouter} from './routes/signin';
import {signoutRouter} from './routes/signout';
import {signupRouter} from './routes/signup';
import {errorhandler} from "./middlewares/errorhandler";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(errorhandler);

app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
});