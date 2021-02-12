const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const mongo = process.env.DATABASE_URL ? process.env.DATABASE_URL : 'mongodb://localhost/workspace-capacity';
mongoose.connect(mongo, { useUnifiedTopology: true, useNewUrlParser: true });

let schema = mongoose.Schema({
  _id: Number,
  isAvailable: Boolean,
  maxCapacity: Number,
  currentCapacity: Number

});

let capacityModel = mongoose.model('workspace-capacity', schema);


const getAvailability = async id => (
  await capacityModel.findOne({_id: id})
)

module.exports = {
  getAvailability
}