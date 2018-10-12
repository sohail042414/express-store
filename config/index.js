var configValues = require('./config');

module.exports = {

    //mongodb://<dbuser>:<dbpassword>@ds133017.mlab.com:33017/todosapp

    getDbConnectionString : function(){
        //return 'mongodb://'+configValues.username+':'+configValues.password+'=@ds161316.mlab.com:61316/sohail_todos';       
        return 'mongodb://localhost:27017/mean-store';       
    }

}