const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

connectDB();

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
