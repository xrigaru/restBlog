/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	read: 	function(req, res){
		Post.find({ sort: 'id DESC' }, function(err, posts){
			if(err){
				console.log(err);
			}else{
				return res.send({
					posts: posts
				});
			}
		});
	} 
	
};

