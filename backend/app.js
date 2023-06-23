require('dotenv').config();
const express = require('express');
const expressConfig = require('./config/express');
const documentsRouter = require('./routes/documents.routes');

const app = express();

expressConfig(app);

// подключаем маршрутизацию
app.use('/api/documents', documentsRouter);

// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}/`)
);
