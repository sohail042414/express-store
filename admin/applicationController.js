//admin applicationController

var applicationModel = require('../models/applicationModel');


const side_items = [
    {
        title: 'Application List',
        url: '/admin/application/list',
    },
    {
        title: 'Create Application',
        url: '/admin/application/create',
    },
];

module.exports.application_list = function (req, res) {

    var page_limit = 50;
    var page = 0;

    if (req.params.page) {
        page = req.params.page;
    }

    var skip_records = 0;

    if (page > 1) {
        skip_records = (page - 1) * page_limit;
    }

    applicationModel.find({}, {}, { skip: skip_records, limit: page_limit }, function (err, results) {
        if (err) throw err;
        res.render('admin/main',
            {
                view: 'application/app_list',
                results: results,
                title: "Applicaitons list",
                side_items: side_items,
            }
        );
    });
};

/*create application*/
module.exports.applicatin_create = function (req, res) {

    var application = {
        "status": true,
        "special": false,
        "featured": false,
        "package_id": '',
        "category_id": "5bc10d464ad7012a756817a8",
        "user_id": "5bc10d1d31ff4b29ef26777a",
        "title": '',
        "short_description": '',
        "description": '',
        "version": 1,
        "url": '',
        "playstore_url": ''
    };

    res.render('admin/main',
        {
            view: 'application/app_create',
            application: application,
            title: "Create New Applicaiton",
            side_items: side_items,
        }
    );

    //res.send({response:" delete application  ",id : req.params.id});
};

//update applicaiton
module.exports.applicatin_update = function (req, res) {

    applicationModel.findById({_id:req.params.id} , function (err, application) {

        if (err) { 
            throw err;            
        }

        res.render('admin/main',
        {
            view: 'application/app_update',
            application: application,
            title: "Update "+application.title,
            side_items: side_items,
        });

    });

};


/*view application*/
module.exports.application_view = function (req, res) {

    var left_items = side_items.slice(0);

    left_items.push({
        title: 'Update Application',
        url: '/admin/application/update/'+req.params.id,
    });

    applicationModel.findOne({ _id: req.params.id }, function (err, result) {

        if (err) {
            throw err;
        };

        res.render('admin/main',
            {
                view: 'application/app_view',
                application: result,
                title: "View App " + result.title,
                side_items: left_items,
            }
        );
    });
};