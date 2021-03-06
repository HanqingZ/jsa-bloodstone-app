require('dotenv').config();
const express = require('express');
const {
  users, setup, troops, buildings, resources, notification, progresses, battle,
} = require('./routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.use('/kingdom/troops', troops);
app.use('/kingdom/buildings', buildings);
app.use('/kingdom/resources', resources);
app.use('/kingdom/progresses', progresses);
app.use('/notification', notification);
app.use('/users', users);
app.use('/kingdom/register', setup);
app.use('/battle', battle);

app.use((err, req, res, next) => {
  const { status, message } = err;
  if (!status) {
    res.sendStatus(500);
    next(err);
    return;
  }
  res.status(status).json({ status, message });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);

module.exports = app;
