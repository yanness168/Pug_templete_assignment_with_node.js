"use strict";

var express = require('express');

var courseRouter = express.Router();

var _require = require('./classes.js'),
    ongoingc = _require.ongoingc;

var status = ["Full", "Not Full"];
courseRouter.get('/', function (req, res) {
  res.render("filterCourse", {
    status: status
  });
});
courseRouter.post('/filter_course', function (req, res) {
  var matches = [];
  var input = {
    id: req.body.id,
    name: req.body.name,
    department: req.body.de,
    availabilty: req.body.availabilty == status[0] ? true : false
  };

  if (input.id !== null) {
    matches = courses.filter(function (c) {
      return c.id === input.id;
    });
  } else if (input.name !== null) {
    matches = courses.filter(function (c) {
      return c.id === input.id;
    });
  } else if (input.department !== null) {
    matches = courses.filter(function (c) {
      return c.department === input.department;
    });
  } else if (input.availabilty == true) {
    matches = courses.filter(function (c) {
      return c.remaining_seats > 0;
    });
  } else if (input.availabilty == false) {
    matches = courses.filter(function (c) {
      return c.remaining_seats = 0;
    });
  }

  res.send(matches);
});
module.exports = courseRouter;