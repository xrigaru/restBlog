/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcryptjs');

module.exports = {

  attributes: {
  		username: {
  			type: "string",
  			unique: true,
  			required: true
  		},
  		password: {
  			type: "string",
  			//unique: true,
  			required: true
  		},

  		toJSON: function(){
  			var obj = this.toObject();
  			delete obj.password;
  			return obj;
  		}
  },

  beforeCreate: function(user, cb){
  	bcrypt.genSalt(10, function(err, salt) {
    	bcrypt.hash(user.password, salt, function(err, hash) {
        	if (err){
        		console.log(err);
        		return cb(null, err);
        	}else{
        		user.password = hash;
        		console.log(user.password);
        		return cb(null, user);
        	}


    	});
	});

  }

};

