const express = require('express');
const path = require('path');
const config = require('./config/config');

const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/auth', authRoutes);

const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
