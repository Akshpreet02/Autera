// netlify/functions/api.js
const express = require('express');
const serverless = require('serverless-http');

// Import your routes
const { registerRoutes } = require('../../server/routes');

const app = express();

// Middlewares
app.use(express.json()); // Use built-in middleware instead of body-parser
app.use((req, res, next) => {  // Simple CORS middleware instead of cors package
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Register routes (without creating HTTP server)
registerRoutes(app);

// Export the serverless function
module.exports.handler = serverless(app);