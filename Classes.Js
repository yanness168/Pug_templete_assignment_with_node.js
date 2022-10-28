const express = require('express');


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

class OngoingCourse extends Course {
    constructor(id,name,department,description,remaining_seats){
        super(id,name,department,description);
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

const o1 = new OngoingCourse('CL123','The origin of South Korea', 'Asian Study','The history of South Korea formally begins with the Japanese surrender on 2 September 1945.',0)
const o2 = new OngoingCourse('CL231','The origin of Ancient China', 'Asian Study','Neolithic civilizations originated at various cultural centers along both the Yellow River and Yangtze River. ',0)
const o3 = new OngoingCourse('CL232','People,Money, and Market', 'Economics','Economics is the study of scarcity and its implications for the use of resources, production of goods and services, growth of production and welfare over time.',2)
const o4 = new OngoingCourse('CL271','Java Programming', 'Computer Science','Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others.',3)
const o5 = new OngoingCourse('CR434','Physics II', 'Science','Classical optics, special relativity, theory of quantum mechanics (QM) using calculus and simple differential equations. Applications of QM to atomic and solid state physics will also be included.',7)

const s1 = new Student('347214321','Eric Chou','Social Science','4th',['CPAN271','CL231'],{'CPAN111': 89,'CPAN123': 90})
const s2 = new Student('312438201','Jay Chou','Applied Science','1st',['CL271','CPAN211','CL232','CR434'],{'CPAN211':87})
const s3 = new Student('442343213','Kwan Chou','Applied Science','4th',['CL271','CPAN211','CL232','CR434'],{'CPAN211':88,'CPAN321':90,'CPAN123':95})
const s4 = new Student('353145464','JJ Chou','Applied Science','3rd',['CL232'],{'CPAN432':89,'CPAN211':76,'CPAN212':88})
const s5 = new Student('324653721','Ethan Chaw','Applied Science','4th',['CL271','CPAN231','CL232','CR434'],{'CPAN211':98,'CPAN321':99})

comcourses = ["CPAN111", "CPAN123", "CPAN211", "CPAN321", "CPAN432","CPAN212"].sort();
ongoingc = [o1,o2,o3,o4,o5];
students = [s1,s2,s3,s4,s5];
module.exports = {ongoingc, students,comcourses};