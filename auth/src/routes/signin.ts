import express = require('express');

const router = express.Router();

router.get('/api/users/signin', (req, res) => {
    res.send('Hi there signin on local');
});

export {router as signinRouter};
