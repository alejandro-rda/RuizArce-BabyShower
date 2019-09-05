// Business.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Participant
let Participant = new Schema({
  person_name: {
    type: String
  }
},{
  collection: 'participant'
});

module.exports = mongoose.model('Business', Participant);
