var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/*
    'id' => $this->primaryKey(),
    'parent' => $this->integer()->defaultValue(0),
    'title' => $this->string(50)->notNull(),
    'description' => $this->text(),
    'show_in_menu' => $this->boolean()->defaultValue(FALSE),
    'created_at' => $this->integer()->notNull(),
    'updated_at' => $this->integer()->notNull(),
*/

var categorySchema = new Schema({
    parent: { type : String },
    title : { type : String , required : true},
    description : { type : String , required : true},
    show_in_menu: { type : Boolean , default: false },
});

var categoryModel = mongoose.model('categories',categorySchema);

module.exports = categoryModel;