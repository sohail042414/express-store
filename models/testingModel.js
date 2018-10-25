var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var personSchema = Schema({
    _id: Number,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
    _creator: { type: Number, ref: 'Person' },
    title: String,
    fans: [{ type: Number, ref: 'Person' }]
});

var Story = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);

module.exports.runTest = function () {
    //get person with all stories. 
    /*
    Person.findOne({_id: 6}).populate('stories').exec(function(err, data) {
        console.log(data);
    });
    */

    //get person with stories only title. 

    Person.findOne({_id: 6}).populate({path:'stories',select: 'title'}).exec(function(err, data) {
        console.log(data);
    });

    /*
    var person = new Person({
        _id: 6,
        name: "sohail",
        age: 30,
    });

    person.save(function (err, savedPerson) {

        if (err) {
            console.log(err)
        }

        console.log('Person saved');

        // var story = new Story({
        //     title: "Once upon a timex.",
        //     _creator: savedPerson._id    
        // });

        var stories = [
            {
                title: "Once upon a time1.",
                _creator: savedPerson._id
            },
            {
                title: "Once upon a time2.",
                _creator: savedPerson._id
            },
            {
                title: "Once upon a time3.",
                _creator: savedPerson._id
            },
        ];

        Story.insertMany(stories, function (err1, data) {

            if (err1) {
                console.log(err1);
            }

            console.log('Story saved');

            console.log(data);

            data.forEach(function (storyObj) {

                person.stories.push(storyObj);
            });

            person.save(function (err, data) {

                if (err) {
                    console.log(err);
                }

                console.log(data);
            });

        });

    });

    */
}


