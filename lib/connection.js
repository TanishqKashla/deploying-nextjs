import mongoose from 'mongoose';



export const ConnectMongo = async () => {

    try {
        const db = await mongoose.connect(process.env.MONGO_URL).connection;
    } catch (err) {
        console.error('Database connection failed:', err);
        throw new Error('Database connection failed');
    }
};