import express = require('express');
import {currentUser} from "../middlewares/currentuser";

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
    //res.send('Hi there currentuser on local');
    res.send({currentUser: req.currentUser || null});
});

export {router as currentUserRouter};
