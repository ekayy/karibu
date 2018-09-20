import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Karibu');
});

app.listen(process.env.PORT, () =>
  console.log(`Running on port ${process.env.PORT}`)
);
