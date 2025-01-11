import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

const jwtPass: string = process.env.JWT_PASS!;





export function userMiddleware(req: Request, res: Response, next: NextFunction) {


    try {

        // getting token from header
        const token = req.headers.authorization;
        // verifying the token 
        const decode = jwt.verify(token as string, jwtPass) as JwtPayload;
        if (decode) {
            const userId = decode.id as string;
            req.body.userId = userId;


            next();
        } else {
            res.status(403).json({
                message: " You are not logged in "
            })
        }
    } catch (e) {
        res.status(401).json({
            message: " JsonWebTokenError"
        })

    }
}