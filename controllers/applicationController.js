var applicationModel = require('../models/applicationModel');

module.exports.application_list_get = function(req, res) {    

    applicationModel.find({},function(err,results){
        
        if(err) throw err;

        res.render('main', 
        { 
          title: 'Express App store',
          view: 'applications/list',
        }
    );

    });
};

/*get application by id*/
module.exports.application_byid_get = function(req, res) {    
    
    applicationModel.findOne({_id:req.params.id},function(err,results){
        
        if(err) throw err;
        
        res.send(results);

    });

    //res.send({response:"Get application data"});
};

/*save application get*/
module.exports.applicatin_form_get = function(req, res) {    
    res.send({response:" application form"});
};

/*save application data post*/
module.exports.applicatin_save_post = function(req, res) {    
    res.send({response:" delete application post  "});
};

/*delete application by id*/
module.exports.applicatin_delete_post = function(req, res) {    
    res.send({response:" delete application post  "});
};