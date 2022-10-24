"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  var matches = [];
  matches = students.filter(function (s) {
    return Object.entries(input).every(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          i = _ref2[0],
          value = _ref2[1];

      return input[i] === value;
    });
  });
  res.send(matches);
});
module.exports = studentRouter;