var mongoose = require('mongoose')
, Schema = mongoose.Schema

var personSchema = Schema({
  _id     : Number,
  name    : String,
  age     : Number,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  _creator : { type: Number, ref: 'Person' },
  title    : String,
  fans     : [{ type: Number, ref: 'Person' }]
});

var Story  = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);


var person1 = new Person({
    _id : 1,
    name : "sohail",
    age :30,    
});

person1.save(function(err,savedPerson){

    if(err) throw err;

    var story1 = new Story({
        title: "Once upon a timex.",
        _creator: savedPerson._id    
    });


    story1.save(function (err1,savedStory) {
        if (err1) throw err1;
        // thats it!
    });

    


});


