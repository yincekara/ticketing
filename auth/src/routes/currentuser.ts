import express = require('express');
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    //res.send('Hi there currentuser on local');
    if (!req.session?.jwt) {
        return res.send({currentUser: null});
    }

    try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
        res.send({currentUser: payload});
    } catch (err) {
        res.send({currentUser: null});
    }
});

export {router as currentUserRouter};
