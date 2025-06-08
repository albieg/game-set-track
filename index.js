import { API_KEY_VALUE, API_BASE_URL } from './config.js';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes.js';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware to parse JSON bodies for all incoming requests
app.use(bodyParser.json());

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

const PORT = process.env.PORT || 5050;

/*
app.set('trust proxy', 1); */

app.use((req, res, next) => {
    if (!API_KEY_VALUE || !API_BASE_URL) {
    console.error("⛔️ Env vars not set yet — blocking request.");
    return res.status(500).json({ error: 'Server not ready. Try again in a second.' });
  }
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});

// Routes
app.use('/api', router);

// Set static folder
/*
app.use(express.static(path.join(__dirname, 'public'))); */

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));