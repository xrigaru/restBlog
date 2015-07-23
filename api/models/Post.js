/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	titulo: { 
	  	type: 'string',
	  	required: true,
	  	unique: true
  	},
	autor: {
	  	type: 'string',
	  	required: true
	},
	contenido: {
	  	type: 'string',
	  	required: true
	},

  	toJSON: function(){
  		var obj = this.toObject();
  		delete obj.updateAt;
  		delete obj.id;
  		return obj;
  	}	
  }
};

