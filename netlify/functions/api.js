const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import your routes
const { registerRoutes } = require('../../server/routes');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Register routes (without creating HTTP server)
registerRoutes(app);

// Export the serverless function
module.exports.handler = serverless(app);