import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import needle from 'needle';
import apicache from 'apicache';
import { parse } from 'url';

const router = express.Router();

// Env vars
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

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

router.get('/matches/:day/:month/:year', cache('1 minutes'), async (req, res) => {
  const { day, month, year } = req.params;
  const date = `${day}/${month}/${year}`; // Proper ISO format

  try {
    const url = `${API_BASE_URL}?${date}`;
    const headers = {
      'X-RapidAPI-Key': API_KEY_VALUE,
      'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com',
      'Accept': 'application/json',
    };

    console.log('Request URL:', url);
    console.log('Request headers:', headers);

    const apiRes = await needle('get', url, { headers });

    if (apiRes.statusCode === 403) {
      console.error("RapidAPI returned 403 Forbidden");
      return res.status(403).json({ error: 'Forbidden from RapidAPI' });
    }

    res.status(200).json(apiRes.body);
  } catch (error) {
    console.error("Backend API fetch error:", error.message);
    res.status(500).json({ error: error.message });
  }
});


export default router;