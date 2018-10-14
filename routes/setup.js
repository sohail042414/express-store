var applicationModel = require('../models/applicationModel');
var userModel = require('../models/userModel');
var categoryModel = require('../models/categoryModel');

module.exports = function(app){

    app.get('/api/setup',function(req,res){

        res.send({test: 'setup already done'});

        /*
        var userData = [
            {
                firstname: 'Sohail',
                lastname: 'Maroof',
                username: 'test',
                email: 'test@gmail.com',
                password: 'test',
                status: true,
            }
        ];
        
        userModel.create(userData,function(err,result){

            if(err) throw err;

            res.send(result);

        });
        
        

        var categoryData = [
            {
                title : 'Games',
                description : "All type of games",
                show_in_menu: true,
            }
        ];
        
        categoryModel.create(categoryData,function(err,result){

            if(err) throw err;

            res.send(result);

        });        
        var appsData = [
            {
                package_id: 'test_package',
                category_id: "5bc10d464ad7012a756817a8",
                user_id : "5bc10d1d31ff4b29ef26777a",
                title : 'Cricket Game 3',
                short_description : 'This is cricket game',
                description : 'Cricket is a bat and ball game!!!!!!!!',
                version : 1,
                url : 'http://cricket.com.pk',
                playstore_url : 'http://test.play.com',
                status: true,
                special: true,
                featured: true,
            },
            {
                package_id: 'test_package',
                category_id: "5bc10d464ad7012a756817a8",
                user_id : "5bc10d1d31ff4b29ef26777a",
                title : 'Football Game 4',
                short_description : 'This is footbal game',
                description : 'foot ball is a real game',
                version : 1,
                url : 'http://fifa.com.pk',
                playstore_url : 'http://fifa.play.com',
                status: true,
                special: true,
                featured: true,
            },
            {
                package_id: 'test_package',
                category_id: "5bc10d464ad7012a756817a8",
                user_id : "5bc10d1d31ff4b29ef26777a",
                title : 'Football Game 5',
                short_description : 'This is footbal game',
                description : 'foot ball is a real game',
                version : 1,
                url : 'http://fifa.com.pk',
                playstore_url : 'http://fifa.play.com',
                status: true,
                special: true,
                featured: true,
            },
            {
                package_id: 'test_package',
                category_id: "5bc10d464ad7012a756817a8",
                user_id : "5bc10d1d31ff4b29ef26777a",
                title : 'Football Game 6',
                short_description : 'This is footbal game',
                description : 'foot ball is a real game',
                version : 1,
                url : 'http://fifa.com.pk',
                playstore_url : 'http://fifa.play.com',
                status: true,
                special: true,
                featured: true,
            },
            {
                package_id: 'test_package',
                category_id: "5bc10d464ad7012a756817a8",
                user_id : "5bc10d1d31ff4b29ef26777a",
                title : 'Football Game 7',
                short_description : 'This is footbal game',
                description : 'foot ball is a real game',
                version : 1,
                url : 'http://fifa.com.pk',
                playstore_url : 'http://fifa.play.com',
                status: true,
                special: true,
                featured: true,
            },
            {
                package_id: 'test_package',
                category_id: "5bc10d464ad7012a756817a8",
                user_id : "5bc10d1d31ff4b29ef26777a",
                title : 'Football Game 8',
                short_description : 'This is footbal game',
                description : 'foot ball is a real game',
                version : 1,
                url : 'http://fifa.com.pk',
                playstore_url : 'http://fifa.play.com',
                status: true,
                special: true,
                featured: true,
            },
            {
                package_id: 'test_package',
                category_id: "5bc10d464ad7012a756817a8",
                user_id : "5bc10d1d31ff4b29ef26777a",
                title : 'Football Game 9',
                short_description : 'This is footbal game',
                description : 'foot ball is a real game',
                version : 1,
                url : 'http://fifa.com.pk',
                playstore_url : 'http://fifa.play.com',
                status: true,
                special: true,
                featured: true,
            },
            {
                package_id: 'test_package',
                category_id: "5bc10d464ad7012a756817a8",
                user_id : "5bc10d1d31ff4b29ef26777a",
                title : 'Football Game 10',
                short_description : 'This is footbal game',
                description : 'foot ball is a real game',
                version : 1,
                url : 'http://fifa.com.pk',
                playstore_url : 'http://fifa.play.com',
                status: true,
                special: true,
                featured: true,
            },
            {
                package_id: 'test_package',
                category_id: "5bc10d464ad7012a756817a8",
                user_id : "5bc10d1d31ff4b29ef26777a",
                title : 'Football Game 11',
                short_description : 'This is footbal game',
                description : 'foot ball is a real game',
                version : 1,
                url : 'http://fifa.com.pk',
                playstore_url : 'http://fifa.play.com',
                status: true,
                special: true,
                featured: true,
            }

        ];
        
        applicationModel.create(appsData,function(err,result){

            if(err) throw err;

            res.send(result);

        });
        */
                

    });

}