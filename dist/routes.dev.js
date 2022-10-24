"use strict";

var express = require('express');

var router = express.Router();

var _require = require('./classes.js'),
    ongoingc = _require.ongoingc,
    students = _require.students;

router.get('/student', function (req, res) {
  res.render('getStudent', {
    studentss: students
  });
});
router.get('/courses', function (req, res) {
  res.render('getCourse', {
    courses: ongoingc
  });
});
router.get('/student/:studentId', function (req, res) {
  var id = req.params.studentId;

  var valueIs = function valueIs(value) {
    return function (object) {
      return Object.values(object).some(function (v) {
        return v === value;
      });
    };
  };

  student = students.filter(valueIs(id));
  res.render('getIdAndAverage', {
    id: id,
    student: student
  });
});
module.exports = router;