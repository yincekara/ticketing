import express = require('express');

const router = express.Router();

router.get('/api/users/signout', (req, res) => {
    res.send('Hi there signout on local');
});

export {router as signoutRouter};
