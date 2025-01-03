import mongoose, { Document, Schema } from 'mongoose';

export interface Message extends Document {
    name: string;
    email: string;
    message: string;
    status: 'new' | 'in-progress' | 'completed';
    createdAt: Date;
    updatedAt: Date;
}

const messageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
    },
    status: {
        type: String,
        enum: ['new', 'in-progress', 'completed'],
        default: 'new',
    },
}, {
    timestamps: true,
});

export default mongoose.models.Message || mongoose.model<Message>('Message', messageSchema); 