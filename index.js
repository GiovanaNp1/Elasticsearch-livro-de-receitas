// const { Client } = require('@elastic/elasticsearch');

var express = require('express');
const routes = require('./routes');
require('dotenv').config()

const port = (process.env.PORT || 3000);

var app = express();
app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`Listening on port ${port}`));