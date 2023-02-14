const express = require('express');
const activitiesRouter = require('./routes/activitiesRouter');

const app = express();

app.use(express.json());
app.use('/activities', activitiesRouter);

app.get('/', (_req, res) => res.status(200).send());

module.exports = app;