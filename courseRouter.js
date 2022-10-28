const express = require('express');
const courseRouter = express.Router();
const {ongoingc,} = require('./classes.js');

var status = ["Full", "Not Full"];

courseRouter.get('/', function(req, res) {
    res.render("filterCourse", {status:status})
})
courseRouter.post('/filter_course', function (req, res){
    var matches = [];
    var input = {
        id: req.body.id,
        name: req.body.name,
        department:  req.body.de,
        availabilty: req.body.availabilty == status[0] ? true:false
    }

    if (input.id !== null){
        matches=courses.filter(c=>c.id === input.id)
    }
    else if (input.name !== null){
        matches=courses.filter(c=>c.id === input.id)
    }
    else if (input.department !== null){
        matches=courses.filter(c=>c.department === input.department)
    }
    else if (input.availabilty == true){
        matches=courses.filter(c => c.remaining_seats > 0)
    }
    else if (input.availabilty == false){
        matches=courses.filter(c => c.remaining_seats = 0)
    }

    res.send(matches)

})
module.exports=courseRouter;