require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const db = require('./db/db');
const logger = require('./utils/logger');

const app = express();
app.use(express.json());

// Simple request logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use('/api', routes);

const port = process.env.PORT || 4000;

app.listen(port, async () => {
  logger.info(`Server running on port ${port}`);

  // Test DB connection
  try {
    const users = await db('users').select('*');
    logger.info(`DB connection successful. User count: ${users.length}`);
  } catch (err) {
    logger.error('DB connection failed', err);
  }
});
