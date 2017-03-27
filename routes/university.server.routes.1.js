module.exports = function(app){

 var universities = require('./../controllers/universities.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/universities')
	.get(universities.list)
	.post(users.requiresLogin, universities.create);

  app.route('/api/universities/universityId')
	.get(universities.read)
  .delete(users.requiresLogin, universities.delete);

	app.route('/api/universities/edit/:universityId')
	.get(universities.read)
	.put(users.requiresLogin, universities.update);


app.param('universityId', universities.universityByID);


}
