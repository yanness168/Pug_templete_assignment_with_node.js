const express = require('express');
const router = express.Router();
class Course {
    constructor(id,name,department,description){
        this.id = id;
        this.name = name;
        this.department = department;
        this.description = description;
    }
}

class CompletedCourse extends Course {
    constructor(id,name,department,description,grade_achieved){
        super(id,name,department,description);
        this.grade_achieved = grade_achieved;
    }
}

class OngoingCourse extends CompletedCourse {
    constructor(id,name,department,description,grade_achieved,remaining_seats){
        super(id,name,department,description,grade_achieved);
        this.remaining_seats = remaining_seats;
    }
}

class Student {
    constructor(id,name,department,semester,courses_enrolled,courses_completed){
        this.id = id;
        this.name = name;
        this.department = department;
        this.semester = semester;
        this.courses_enrolled = courses_enrolled;
        this.courses_completed = courses_completed;
    }
}

var o1 = new OngoingCourse('CL123','The origin of South Korea', 'Asian study','asdfgrg',90.5,'16')
var o2 = new OngoingCourse('CL231','The origin of Ancient China', 'Asian study','aeghtjryerg',80,'13')
var o3 = new OngoingCourse('CL232','People,Money, and Market', 'Economics','aeghtjryerg',92,'2')
var o4 = new OngoingCourse('CL271','Java Programming', 'Computer Science','aeghtjryerg',90,'3')
var o5 = new OngoingCourse('CR434','Physics II', 'Science','erhtrgrg',67,'7')

var s1 = new Student('347214321','Eric Chou','Social Science',4,['CPAN271','CL231'],['CPAN111','CPAN123'])
var s2 = new Student('312438201','Jay Chou','Applied Science',1,['CL271','CPAN211','CL232','CR434'],['CPAN211'])
var s3 = new Student('442343213','Kwan Chou','Applied Science',4,['CL271','CPAN211','CL232','CR434'],['CPAN211','CPAN321','CPAN321',])
var s4 = new Student('353145464','JJ Chou','Applied Science',3,['CL232'],['CPAN432','CPAN211','CPAN212'])
var s5 = new Student('324653721','Ethan Chaw','Applied Science',4,['CL271','CPAN231','CL232','CR434'],['CPAN211','CPAN321',])


router.route('/student')
    .get((req,res)=>{
        res.send(s2);
    })

module.exports = router;