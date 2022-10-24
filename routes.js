const express = require('express');
const router = express.Router();
const {ongoingc,students} = require('./classes.js');

router.get('/student', function(req, res) {
    res.render('getStudent',{studentss: students});
});

router.get('/courses', function (req, res) {
    res.render('getCourse',{courses: ongoingc});
});
router.get('/student/:studentId', function (req, res) {
    var id = req.params.studentId;
    const valueIs = (value) => (object) => Object.values(object).some((v) => v === value);
    student = students.filter(valueIs(id));
    res.render('getIdAndAverage',{id: id, student:student});
});

module.exports = router;