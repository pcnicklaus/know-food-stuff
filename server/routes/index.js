var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recipe = mongoose.model('recipes');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// GET ALL RECIPES
router.get('/recipes', function (req, res, next) {
  Recipe.find(function ( err, data) {
    if (err) {
      res.json({ 'message': err });
    } else {
      res.json(data);
    }
  });
});

// GET ONE RECIPE
router.get('/recipe/:id', function (req, res, next) {
  var query = {"_id": req.params.id};
  Recipe.findOne(query, function (err, data) {
    if (err) {
      res.json ({ 'message': err });
    } else {
      res.json(data);
    }
  });
});

// POST A RECIPE
router.post('/recipes', function (req, res, next) {
  new Recipe(req.body).save(function (err, recipe){
    res.json({ message: 'Success!' });
  });
});

// UPDATE A SINGLE RECIPE
router.put('/recipe/:id', function (req, res, next){
  var query = {"_id": req.params.id};
  var update = req.body;
  var options = {new: true};
  Recipe.findOneAndUpdate(query, update, options, function (err, data) {

  });
});




module.exports = router;
