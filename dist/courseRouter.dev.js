"use strict";

var express = require('express');

var courseRouter = express.Router();

var _require = require('./classes.js'),
    ongoingc = _require.ongoingc;

courseRouter.get('/', function (req, res) {
  res.render("filterCourse");
});
courseRouter.post('/filter_course', function (req, res) {
  var id = req.body.id;
  var name = req.body.name;
  var department = req.body.de;
  var availabilty = req.body.availabilty == "Full" ? true : false;
  var input = {
    id: id,
    name: name,
    department: department,
    availabilty: availabilty
  };
  res.send(input);
});
module.exports = courseRouter;