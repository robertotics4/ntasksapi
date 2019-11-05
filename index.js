const express = require('express');
const consign = require('consign');
const app = express();

const PORT = 3000;

consign()
    .include('src/libs/config.js')
    .then('db.js')
    .then('src/libs/middlewares.js')
    .then('src/routes')
    .then('src/libs/boot.js')
    .into(app);
