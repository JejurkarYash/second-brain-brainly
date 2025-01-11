"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = userMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jwtPass = process.env.JWT_PASS;
function userMiddleware(req, res, next) {
    try {
        // getting token from header
        const token = req.headers.authorization;
        // verifying the token 
        const decode = jsonwebtoken_1.default.verify(token, jwtPass);
        if (decode) {
            const userId = decode.id;
            req.body.userId = userId;
            next();
        }
        else {
            res.status(403).json({
                message: " You are not logged in "
            });
        }
    }
    catch (e) {
        res.status(401).json({
            message: " JsonWebTokenError"
        });
    }
}
