const Schema = require('mongoose');

const colouringSchema = new Schema({
  name: {
    type: String, 
  }
});

module.exports = colouringSchema