var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('main', 
      { 
        title: 'Express App store',
        view: 'index',
      }
  );
});

module.exports = router;
