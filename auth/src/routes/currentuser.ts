import express = require('express');

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    res.send('Hi there currentuser on local');
});

export {router as currentUserRouter};
