import "@babel/polyfill";
import express from 'express';
import jsendp from 'jsendp';
import winstonEnvLogger from 'winston-env-logger';
import { httpError } from "./helper";

import routes from './routes/index';


const app = express();

const port = process.env.PORT || 3000;

// middlewares
app.use(jsendp());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err){
    return httpError(res, 'Invalid JSON payload passed.', null);
  }
  next(err);
})

app.use('/', routes);

app.listen(port, () => {
  winstonEnvLogger.info({
    message: `App started on port ${port}`
  })
});

