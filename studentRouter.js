const express = require('express');
const studentRouter = express.Router();
const {ongoingc,students,comcourses} = require('./classes.js');


studentRouter.get('/', function(req, res) {
    var onids = ongoingc.map((item)=>{
        return item.id;
    })
    res.render("filterStudent",{onids,comids:comcourses})
})

studentRouter.post('/filter_student', function (req, res){
    var id = req.body.id;
    var name = req.body.name;
    var department = req.body.de;
    var oncourses = req.body.on;
    var completedcourses = req.body.com;

    var input = {
        id: id,
        name: name,
        department: department,
        courses_enrolled: oncourses,
        courses_completed: completedcourses
    }
    var matches = [];
    matches = students.filter(s=>{
        return Object.entries(input).every(([i,value])=>{
            return input[i] === value;
        });
    });
    res.send(matches)

})

module.exports =  studentRouter;