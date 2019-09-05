const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  actuator = require('express-actuator'),
  participantRouter = require('./routes/participant.route'),
  config = require('./DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);

const app = express();
app.use(bodyParser.json());
app.use(actuator());
app.use(cors());
app.use('/participant', participantRouter);
const port = process.env.PORT || 3000;

const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});
