import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

/* eslint-disable no-var */
declare global {
    var mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    } | undefined;
}
/* eslint-enable no-var */

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

export async function connectDB() {
    const cached = (global.mongoose || { conn: null, promise: null }) as MongooseCache;

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

// For NextAuth MongoDB Adapter
const client = new MongoClient(MONGODB_URI);
const clientPromise = client.connect();

export default clientPromise; 