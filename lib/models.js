import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const tweetSchema = new Schema({
    title: String,
    body: String,
})

export const Tweet = mongoose.models.Tweet || mongoose.model('Tweet', tweetSchema);