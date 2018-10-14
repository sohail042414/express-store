//admin applicationController

var applicationModel = require('../models/applicationModel');


const side_items = [
    {
        title : 'Application List',
        url : '/admin/application/list',
    },
    {
        title : 'Create Application',
        url : '/admin/application/create',
    },
];

module.exports.application_list= function(req, res) {    

    var page_limit = 50;
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
        res.render('main',
            {
                view: 'admin/app_list',
                results : results,
                title : "Applicaitons list",
                side_items : side_items,            
            }
        );
    });
};

/*create application*/
module.exports.applicatin_create = function(req, res) {  

    var application = {};

    res.render('main',
    {
        view: 'admin/app_create',
        application : application,
        title : "Create New Applicaiton",
        side_items : side_items,            
    }
);

    //res.send({response:" delete application  ",id : req.params.id});
};

//update applicaiton
module.exports.applicatin_update = function(req, res) {    
    
    applicationModel.findOne({_id:req.params.id},function(err,results){
        
        if(err) throw err;
        
        res.send(results);
    });
    //res.send({response:"Get application data"});
};


/*view application*/
module.exports.application_view = function(req, res) {    
    
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
    
    applicationModel.findByIdAndUpdate(req.body.id,postedData,function(err,savedApp){

        if(err) throw err;

        res.send({status:"Success", app:savedApp});
    });
};