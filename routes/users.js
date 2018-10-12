var express = require('express');
var router = express.Router();
var userModel = require('../models/userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {

  userModel.find({},function(err,results){
    
      if(err) throw err;
      
      res.send(results);

    });

});

module.exports = router;
