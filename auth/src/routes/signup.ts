import express = require('express');

const router = express.Router();

router.get('/api/users/signup', (req, res) => {
    res.send('Hi there signup on local');
});

export {router as signupRouter};
