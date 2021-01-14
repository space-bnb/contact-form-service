const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/workspace-capacity');

let schema = mongoose.Schema({
  _id: Number,
  isAvailable: Boolean,
  maxCapacity: Number,
  currentCapacity: Number

});

let capacityModel = mongoose.model('workspace-capacity', schema);