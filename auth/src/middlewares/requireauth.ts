import {Request, Response, NextFunction} from 'express';
import {NotAuthorizedError} from "../errors/notauthorizederror";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser){
        throw new NotAuthorizedError();
    }
}