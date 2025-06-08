import { API_KEY_VALUE, API_BASE_URL } from './config.js';
import express from 'express';
import needle from 'needle';
import apicache from 'apicache';
import { parse } from 'url';

const router = express.Router();

console.log('API_BASE_URL:', API_BASE_URL);
console.log('API_KEY_VALUE:', API_KEY_VALUE ? '***present***' : 'MISSING');

// Init cache
let cache = apicache.middleware;

router.get('/search', cache('1 minutes'), async (req, res) => {
  try {
    const query = parse(req.url, true).query;
    const url = `${API_BASE_URL}?${new URLSearchParams(query)}`;

    const apiRes = await needle('get', url, {
      headers: {
        'X-RapidAPI-Key': API_KEY_VALUE,
        'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com',
      }
    });

    res.status(200).json(apiRes.body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/matches/:day/:month/:year', async (req, res) => {
  console.log("✅ /matches route hit");
  const { day, month, year } = req.params;
  console.log('Received request for date:', { day, month, year });

  try {
    const url = `${API_BASE_URL}/api/tennis/events/${day}/${month}/${year}`;
    const headers = {
      'X-RapidAPI-Key': API_KEY_VALUE,
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com',
      'Accept': 'application/json',
    };

    console.log('Request URL:', url);
    console.log('Request headers:', headers);

    const apiRes = await needle('get', url, { headers });

    if (!apiRes || !apiRes.body) {
      console.error("❌ No response or body from RapidAPI");
      return res.status(502).json({ error: 'No data returned from API' });
    }

    if (apiRes.statusCode >= 400) {
      console.error(`❌ API returned error (${apiRes.statusCode}):`, apiRes.body);
      return res.status(apiRes.statusCode).json(apiRes.body);
    }

    console.log("✅ API call success");
    console.log("RapidAPI response body:", apiRes.body);

    // ✅ ONLY ONE RESPONSE SENT
    return res.status(200).json(apiRes.body);

  } catch (error) {
    console.error("Backend API fetch error:", error.message);
    return res.status(500).json({ error: error.message });
  }
});


export default router;