const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const API_KEY = "{fd5262cd8ac6575212a5a66cff88a2eb}";

app.get('/weather', async (req, res) => {
  const location = req.query.location;
  try {
    // Use dynamic import() for node-fetch
    const fetch = await import('node-fetch');
    const response = await fetch.default(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
