const express = require('express');
const cors = require('cors');
const animesRoutes = require('./src/routes/animes');
const usersRoutes = require('./src/routes/users');
const authRoutes = require('./src/routes/auth');
require('./src/models');

const app = express();
const port = 4888;

app.use(cors())
app.use(express.json());

app.use(animesRoutes);
app.use(usersRoutes);
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})