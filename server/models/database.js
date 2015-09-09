var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Recipe = new Schema(
  {
    name: String,
    recipeType: String,
    prepTime: String,
    notes: String
  }
);

mongoose.model('recipes', Recipe);

mongoose.connect('mongodb://localhost/know-your-food-recipes');



