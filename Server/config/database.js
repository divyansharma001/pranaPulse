import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config({
    path: '../.env'
});

const dbConfig ={
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

const db = new pg.Client(dbConfig);

db.connect()
.then(()=>{
    console.log('Database Connected')
})
.catch(err=>{
    console.log('Database Connection Error', err.stack)
})

export default db;
