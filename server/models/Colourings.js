const mongoose = require('mongoose');

const colouringsSchema = new Schema({
  name: {
    type: String, 
  }
});

module.exports = colouringsSchema