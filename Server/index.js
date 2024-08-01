// import { fileURLToPath } from 'url';
// import path from 'path';
// import dotenv from 'dotenv';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Load environment variables
// dotenv.config({ path: path.resolve(__dirname, '.env') });

// // Import and run your server
// import('./utils/server.js');

import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') }); // Use path.join for better cross-platform compatibility

import app from './utils/server.js'; // Import your server instance

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
