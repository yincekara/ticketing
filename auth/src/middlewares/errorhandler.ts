import express = require('express');
import {Request, Response, NextFunction} from 'express';
import {CustomError} from "../errors/customerror";

export const errorhandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({errors: err.serializeErrors()});
    }
    res.status(400).send({
        errors: [{message: 'Something went wrong. ' + err.message}]
    });
};