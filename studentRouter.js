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
    //matches = students.filter(s=>s.id === id || s.name === name || s.department === department);
    if(id!==''){
        matches=students.filter(s=>(s.id === input.id))
    }
    else if (name!==""){
        matches=students.filter(s=>(s.name === input.name))
    }
    else if (department!==""){
        matches=students.filter(s=>(s.department === input.department))
    }
    else if (input.courses_enrolled!==""){
        matches=students.filter(s=>(s.courses_enrolled === input.courses_enrolled))
    }
    else if (courses_completed!==""){
        matches=students.filter(s=>(s.courses_completed === input.courses_completed))
    }
    else(matches==null)

    res.send(matches)

})

module.exports =  studentRouter;