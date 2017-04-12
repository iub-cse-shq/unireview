var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UniversitySchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },
  photo: {
    type: String,
    default: '',
    trim: true,
    required: 'Photo required'
  },
  url: {
    type: String,
    default: '',
    trim: true,
    required: 'Url required'
  },
  

  rank: {
    type: Number,
    default: '',
    trim: true,
    required: 'Rank required'

  },

  address: {
    type: String,
    Default:'',
    trim:true,
     required: 'Address required'

  },
  
    description: {
    type: String,
    Default:'',
    trim:true,
     required: 'Description required'

  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var University = mongoose.model('University', UniversitySchema, 'universities');
module.exports = University;
