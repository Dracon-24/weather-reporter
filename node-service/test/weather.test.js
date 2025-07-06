const request = require('supertest');
const express = require('express');

const app = express();
app.get('/weather', (req, res) => {
    res.json({ weather: "Sunny", temp: "30°C" });
});

describe('GET /weather', () => {
    it('should return mock weather data', async () => {
        const res = await request(app).get('/weather');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ weather: "Sunny", temp: "30°C" });
    });
});
