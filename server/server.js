import express from 'express';
import api from './api';
import error from './middleware/error';
import config from './config';
import mongoose from 'mongoose';
import middlware from './middleware/appMiddlware';
import fs from 'fs';
import readline from 'readline';
import { google } from 'googleapis';
import path from 'path';

const app = express();

// mongoose: connect to database
mongoose.Promise = global.Promise;
mongoose.connect(
  config.default.database,
  { useMongoClient: true }
);
// setup the app middlware
middlware(app);

// setup the api
app.use('/api', api);

// error middleware
app.use(error);

export default app;
