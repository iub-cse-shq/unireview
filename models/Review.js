var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ReviewSchema = {

  username: {
    type: String,
    default: '',
    trim: true,
    required: 'Username required'
  },

  review: {
    type: String,
    default: '',
    trim: true,
    required: 'Review required'

  },

  rating: {
    type: Number,
    required: 'Rating required'
    
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Review = mongoose.model('Review', ReviewSchema, 'reviews');
module.exports = Review;
