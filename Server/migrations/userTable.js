// migrations/create-users-table.js
import db from '../config/database.js';

const createUsersTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL
        );
    `;

    try {
        await db.query(createTableQuery);
        console.log('Users table created or already exists');
    } catch (error) {
        console.error('Error creating users table:', error);
    } finally {
        db.end(); // Close the database connection
    }
};

createUsersTable();
