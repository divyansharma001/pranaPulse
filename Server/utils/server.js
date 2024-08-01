import express from 'express';
import cors from 'cors';
import chatRoute from '../routes/chatRoute.js';  
import authRoutes from '../routes/authRoute.js';  


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const corsOptions = {
    origin: '*',
    credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/v1/user", chatRoute);


app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});
  


app.get('/check', (req, res) => {
    res.status(200).send({
        message: "The backend is working"
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;