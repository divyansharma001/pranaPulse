import express from 'express'
import cors from 'cors'
import chatRoute from '../routes/chatRoute.js'

const app = express()

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}

app.use(cors(corsOptions))

app.use("/api/v1/user", chatRoute)


app.get('/check', (req, res)=>{
res.status(200).send({
    message: "The backend is working"
});
});

app.listen(3000, ()=>{
    console.log(`Server is running on port 3000`)
})