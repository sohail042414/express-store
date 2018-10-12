var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/*
'id' => $this->primaryKey(),
'package_id' => $this->string(255)->notNull()->unique(),
'title' => $this->string(50)->notNull(),
'short_description' => $this->string(255)->notNull(),
'description' => $this->text(),
'playstore_url' => $this->text()->notNull(),
'version' => $this->float()->defaultValue(1.0),
'user_id' => $this->integer()->notNull(),
'status' => $this->boolean()->defaultValue(TRUE),
'special' => $this->boolean()->defaultValue(FALSE),
'featured' => $this->boolean()->defaultValue(FALSE),
'updated_by' => $this->integer()->defaultValue(0),
'created_at' => $this->integer()->notNull(),
'updated_at' => $this->integer()->notNull(),
*/

var appsSchema = new Schema({
    //category_id:{type: Schema.categories.id, ref: 'category',required: true},
    //package_id: { type : Schema.users.id , ref:'user', required : true},
    package_id: { type : String, required : true},
    category_id: { type : String, required : true},
    user_id : { type : String , required : true},
    title : { type : String , required : true},
    short_description : { type : String , required : true},
    description : { type : String },
    version : Number,
    url : String,
    playstore_url : String,
    status: { type : Boolean , default: true },
    special: { type : Boolean , default: false },
    featured: { type : Boolean , default: false },
});

var applicationModel = mongoose.model('applications',appsSchema);

module.exports = applicationModel;