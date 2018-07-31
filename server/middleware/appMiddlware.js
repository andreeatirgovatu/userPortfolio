import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import override from 'method-override';
import express from 'express';

// setup global middlewares
const middleware = app => {
  app.use(express.static('uploads'));
  // use morgan to log requests to the console
  app.use(morgan('dev'));
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(
    bodyParser.json({
      type: 'application/json',
      limit: 52428800
    })
  );
  app.use(cors());
  app.use(override());
};

export default middleware;
