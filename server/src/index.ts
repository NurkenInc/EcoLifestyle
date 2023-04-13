import { config } from 'dotenv';
config();

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/users';

const PORT = 10000;

const app = express();

app.use(cors({
    origin: '*',
}));

app.use(express.json());
app.use('/user', userRoutes);

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Server running on port ${PORT}`);
    app.listen(PORT);
});