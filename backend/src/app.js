const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth .routes');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/food', require('./routes/food.routes'));
module.exports = app;
