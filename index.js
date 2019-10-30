const express = require('express');
const consign = require('consign');
const app = express();

const PORT = 3000;

consign()
    .include('./src/models')
    .then('./src/routes')
    .into(app);

app.listen(PORT, () => {
    console.log(`NTask API started on port ${PORT}`);
});