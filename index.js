const express = require('express');
const animesRoutes = require('./src/routes/animes');
require('./src/models');

const app = express();
const port = 4888;

app.use(express.json());

app.use(animesRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})