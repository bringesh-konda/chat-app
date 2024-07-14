//Package imports.
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//File imports.
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

//DataBase imports.
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());   
app.use(cookieParser());     // to parse the incoming requests with JSON payloads (from req.body)

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

app.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});

