var applicationModel = require('../models/applicationModel');

module.exports.application_list_get = function(req, res) {    

    console.log(req.params);

    var page_limit = 2;
    var page = 0;
        
    if(req.params.page){
        page = req.params.page;
    }

    var skip_records = 0;

    if(page > 1){
        skip_records = (page-1) * page_limit;
    }

    applicationModel.find({},{},{skip:skip_records,limit:page_limit},function(err,results){

        if(err) throw err;
        
        res.send(results);
    });
};

/*get application by id*/
module.exports.applicatin_get = function(req, res) {    
    
    applicationModel.findOne({_id:req.params.id},function(err,results){
        
        if(err) throw err;
        
        res.send(results);
    });
    //res.send({response:"Get application data"});
};

/*update using put*/
module.exports.application_update_put = function(req, res) {    
    
    postedData = {
        "status": req.body.status ? true : false,
        "special": req.body.special ? true: false,
        "featured": req.body.featured ? true : false,
        "package_id": req.body.package_id,
        "category_id": "5bc10d464ad7012a756817a8",
        "user_id": "5bc10d1d31ff4b29ef26777a",
        "title": req.body.title,
        "short_description": req.body.short_description,
        "description": req.body.description,
        "version": req.body.version,
        "url": req.body.url,
        "playstore_url": req.body.playstore_url
    };

    applicationModel.findByIdAndUpdate(req.body.id,postedData,function(err,savedApp){

        if(err){
            throw err;
        }

        res.send({status:true, application:savedApp});
    });

    //res.send({response:" application put data",test : "testing again"});
};

/*save application data post*/
module.exports.applicatin_create_post = function(req, res) {    
    
    // console.log(req.body);
    // res.send({status:"Success",data: req.body});
 
    postedData = {
        "status": req.body.status,
        "special": req.body.special,
        "featured": req.body.featured,
        "package_id": req.body.special,
        "category_id": "5bc10d464ad7012a756817a8",
        "user_id": "5bc10d1d31ff4b29ef26777a",
        "title": req.body.title,
        "short_description": req.body.short_description,
        "description": req.body.description,
        "version": req.body.version,
        "url": req.body.url,
        "playstore_url": req.body.playstore_url
    };

    applicationModel.create(postedData,function(err,savedApp){

        if(err){
            //console.log(err);
            res.send({status:false,'errors': err.errors});
        }else{
            res.send({status:true,application: savedApp});
        }

    });
    
    //res.send({response:" Create application post  ", test : req.body});
};

/*delete application*/
module.exports.applicatin_delete = function(req, res) {  

    console.log(req.body.id);
    
    applicationModel.findByIdAndDelete(req.body.id,function(err){

        if(err) throw err;
        
        res.send({Status : "Success", id : req.body.id});
    });
    //res.send({response:" delete application  ",id : req.params.id});
};