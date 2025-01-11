
import { z } from 'zod';
import mongoose from 'mongoose';


export const userSchema = z.object({
    username: z.union([z.string(), z.number()]),
    password: z.union([z.string(), z.number()])
    // .min(4).max(20).toUpperCase().toLowerCase()
})


// Zod schema for the content
export const ContentSchemaZod = z.object({
    title: z.string().nonempty(), // Non-empty string for title
    link: z.string(), // URL validation for the link
    type: z.string(), // Enum validation for type
    tags: z.optional(z.string()), // Array of valid ObjectId strings for tags
    userId: z.string().refine(
        (id) => mongoose.Types.ObjectId.isValid(id),
        "User ID must be a valid ObjectId"
    ) // Valid ObjectId string for userId
});



export const shareScheme = z.object({
    share: z.enum(["true", "false"])
})