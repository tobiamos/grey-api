require('dotenv').config({ path: '.env'});
const { sequelize } = require('./models');

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { sendJSONResponse } = require('./helpers');
const apiRoutes = require('./routes');

const app = express();

const corsOptions = {
  origin: ['http://localhost:4200', 'https://objective-dubinsky-a9186a.netlify.com'],
  methods: ['OPTIONS', 'GET', 'PUT', 'POST', 'DELETE'],
  credentials: true,
};
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1', apiRoutes);
app.use((req, res, next) => {
  const err = new Error('We apologize, there seems to be a problem with your request.');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => { //eslint-disable-lin
  if (err.isBoom) {
    const { message } = err.data[0];
    sendJSONResponse(res, err.output.statusCode, null, req.method, message);
  } else if (err.status === 404) {
    sendJSONResponse(res, err.status, null, req.method, 'We apologize, there seems to be a problem with your request.');
  } else {
    sendJSONResponse(res, 500, null, req.method, 'Something Went Wrong!');
  }
});


module.exports = { app };


sequelize.sync({ force: false }).then(() => {
  console.log('Sqlite datase running');
app.listen(process.env.PORT, () => console.log('App running on port', process.env.PORT));
}).catch(error => console.error(error.message));