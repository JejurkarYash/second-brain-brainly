"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareScheme = exports.ContentSchemaZod = exports.userSchema = void 0;
const zod_1 = require("zod");
const mongoose_1 = __importDefault(require("mongoose"));
exports.userSchema = zod_1.z.object({
    username: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.number()])
    // .min(4).max(20).toUpperCase().toLowerCase()
});
// Zod schema for the content
exports.ContentSchemaZod = zod_1.z.object({
    title: zod_1.z.string().nonempty(), // Non-empty string for title
    link: zod_1.z.string(), // URL validation for the link
    type: zod_1.z.string(), // Enum validation for type
    tags: zod_1.z.optional(zod_1.z.string()), // Array of valid ObjectId strings for tags
    userId: zod_1.z.string().refine((id) => mongoose_1.default.Types.ObjectId.isValid(id), "User ID must be a valid ObjectId") // Valid ObjectId string for userId
});
exports.shareScheme = zod_1.z.object({
    share: zod_1.z.enum(["true", "false"])
});
//# sourceMappingURL=userSchma.js.map