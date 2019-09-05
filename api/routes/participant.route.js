const express = require('express');
const app = express();
const participantRoutes = express.Router();

// Require Business model in our routes module
let Participant = require('../models/Name');

// Defined store route
participantRoutes.route('/add').post(function (req, res) {
  let participantObject = new Participant(req.body);
  participantObject.save()
    .then(response => {
      res.status(200).json({message: 'Usted ha confirmado su asistencia'});
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

module.exports = participantRoutes;
