// import pkg from "pg"
// const {Client} = pkg;
// import dotenv from 'dotenv';

// dotenv.config({
//     path: '../.env'
// });

// const dbConfig ={
//     host: process.env.DB_HOST || 'localhost',
//     port: process.env.DB_PORT || 5432,
//     user: process.env.DB_USER || 'default_user',
//     password: process.env.DB_PASSWORD || 'default_password',
//     database: process.env.DB_DATABASE || 'default_database'
// }

// const db = new Client(dbConfig);

// db.connect()
// .then(()=>{
//     console.log('Database Connected')
// })
// .catch(err=>{
//     console.log('Database Connection Error', err.stack)
// })

// export default db;
// db.js
// config/db.js
// config/db.js
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const { Client } = pkg; // Destructure Client from the default export

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'default_user',
    password: process.env.DB_PASSWORD || 'default_password',
    database: process.env.DB_DATABASE || 'default_database'
};

const db = new Client(dbConfig);

db.connect()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err.stack));

export default db;
