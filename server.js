import browserSync from 'browser-sync';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Initialize BrowserSync
browserSync.init({
    proxy: `http://localhost:${PORT}`, // Proxy Express server
    files: [
        path.join(__dirname, 'public/**/*.html'), // Sleduje všechny HTML soubory
        path.join(__dirname, 'public/**/*.css'),  // Sleduje všechny CSS soubory
        path.join(__dirname, 'public/**/*.js')    // Sleduje všechny JS soubory
    ],
    port: 3001, // BrowserSync na jiném portu
    open: true, // Automaticky otevře prohlížeč
    ui: false   // Zakáže BrowserSync UI
});
