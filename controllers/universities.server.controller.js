var mongoose = require('mongoose');
var University = require('./../models/University.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  University.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var university = new University(req.body);
  university.user = req.user;
  university.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.University);
};
exports.new = function(req, res) {
	res.render('./../public/views/university/create.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.edit = function(req, res) {
	res.render('./../public/views/university/edit.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.view = function(req, res) {
  console.log(req.university)
	res.render('./../public/views/university/view.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.all = function(req, res) {
 University.find(function(err, data) {
    if (err) {
      return res.status(400).send({

          message: errorHandler.getErrorMessage(err)
        });
    } else {
      console.log("api called");
      console.log(data);

      res.render('./../public/views/university/list.ejs', {
    		user: req.user || null,
    		request: req,
        universities: data
    	});
    }
  });

};


exports.delete = function(req, res) {
	var university = req.university;
	university.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(university);
		}
	});
};


module.exports.update = function(req, res) {
  var university = req.university;

  	university = _.extend(university, req.body);

  	university.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(university);
  		}
  	});
};

exports.universityByID = function(req, res, next, id) {
	University.findById(id).populate('user', 'email').exec(function(err, university) {
		if (err) return next(err);
		if (!university) return next(new Error('Failed to load university ' + id));
		req.university = university;
		next();
	});
};
