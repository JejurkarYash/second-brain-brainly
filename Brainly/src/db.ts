import mongoose, { model, Schema } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const mongodbUrl: string = process.env.MongoDB_URL!;
mongoose.connect(mongodbUrl);



//? defining the user schema 
const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String,

})


// ? defining the content schema
const contentTypes = ['image', 'audio', 'video', 'article']
const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    tags: [{ type: mongoose.Types.ObjectId, enum: contentTypes, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }

})

// ? definging the tags schema 
const TagsSchema = new Schema({
    title: String
})

// ? defining the sharable links schema 
const LinkSchema = new Schema({
    hash: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true }
})



export const userModel = model('User', UserSchema);
export const contentModel = model('Content', ContentSchema);
export const tagModel = model('Tag', TagsSchema);
export const linkModel = model('Link', LinkSchema);