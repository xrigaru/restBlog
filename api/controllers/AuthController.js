/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require('bcryptjs');

module.exports = {
	login: function(req, res){
		User.findOne({ username: req.param('username') }, function(err, user){
			if(err){
				console.log(err);
			}
			if(user){
              	bcrypt.compare(req.param('password'), user.password, function(err, match) {
    				if(err){
						console.log(err);
					}
					if(match){
						req.session.user = user;
						req.session.authenticated = true;
						res.send({
							user: user
						});
						return console.log(user);
					}else{
						return console.log('La contraseña o el usuario no existen');
					}
				});
			}else{
						return console.log('La contraseña o el usuario no existen');
					}
			});
		},

	logout: function(req, res){
		req.session.destroy();
		return res.json(200);
	} 

};

