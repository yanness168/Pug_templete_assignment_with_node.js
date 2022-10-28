"use strict";

var express = require('express');

var studentRouter = express.Router();

var _require = require('./classes.js'),
    ongoingc = _require.ongoingc,
    students = _require.students,
    comcourses = _require.comcourses;

studentRouter.get('/', function (req, res) {
  var onids = ongoingc.map(function (item) {
    return item.id;
  });
  res.render("filterStudent", {
    onids: onids,
    comids: comcourses
  });
});
studentRouter.post('/filter_student', function (req, res) {
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
  };
  var matches = []; //matches = students.filter(s=>s.id === id || s.name === name || s.department === department);

  if (id !== '') {
    matches = students.filter(function (s) {
      return s.id === input.id;
    });
  } else if (name !== "") {
    matches = students.filter(function (s) {
      return s.name === input.name;
    });
  } else if (department !== "") {
    matches = students.filter(function (s) {
      return s.department === input.department;
    });
  } else if (input.courses_enrolled !== "") {
    matches = students.filter(function (s) {
      return s.courses_enrolled === input.courses_enrolled;
    });
  } else if (courses_completed !== "") {
    matches = students.filter(function (s) {
      return s.courses_completed === input.courses_completed;
    });
  } else matches == null;

  res.send(matches);
});
module.exports = studentRouter;