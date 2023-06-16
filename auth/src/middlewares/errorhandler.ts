import express = require('express');
import {Request, Response, NextFunction} from 'express';

export const errorhandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log('Something went wrong ', err);
    res.status(400).send({
        message: 'Something went wrong. Error detail: ' + err.message
    });
};