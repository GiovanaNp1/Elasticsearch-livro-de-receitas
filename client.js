const { Client } = require('@elastic/elasticsearch');
require('dotenv').config()

const client = new Client({
  node: process.env.HOST_ELASTICSEARCH,
  auth: {
      apiKey: process.env.API_KEY_ELASTICSEARCH
  }
});

module.exports = client