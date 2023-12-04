const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Use cors middleware

app.get('/api/anime', async (req, res) => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/anime/');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching anime data:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log()
});