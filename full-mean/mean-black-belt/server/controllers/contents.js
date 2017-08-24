const mongoose = require('mongoose');
const Content = mongoose.model('Content');
const Sub = mongoose.model('Sub');

module.exports = {
	add: function(req, res) {
		let content = new Content(req.body);
		content.save( err => {
			if(err) {
				console.log(err);
				return res.status(402).json(err);
			}
			else{
				console.log(content);
				return res.json(content)
			}
		})
	},
	getAll: function(req, res) {
		Content.find({}, function(err, contents) {
			if(err){
				return res.status(400).json(err)
			}
			else{
				return res.json(contents)
			}
		})
	},
	delete: function(req, res) {
		Content.findOneAndRemove({'_id': req.params.id}, function(err, response) {
			if(err) {
				return res.status(402).json(err)
			}
			else{
				return res.json(response)
			}
		})
	},
	getOne: function(req, res) {
		Content.findOne({'_id':req.params.id}).populate('contentsubs').exec(function(err, content) {
			if(err){
				return res.status(400).json(err)
			}
			else{
				return res.json(content)
			}
		})
	},
	addsub: function(req, res) {
		Content.findOne({'_id':req.params.id}, function(err,content){
			var contentsub = new Sub(req.body);
			contentsub._content = content._id;
			contentsub.save(function(err){
				content.contentsubs.push(contentsub);
				content.save(function(err){
					if(err) {
						 return res.status(400).json(err);
					} else {
						 return res.json(contentsub)
					}
				});
		});
   });
   },
   upcount: function(req, res){
	   Sub.findOne({'_id':req.params.subid}, function(err,contentsub){
		   contentsub.count += 1;
		   contentsub.save(function(err){
			   if(err) {
					return res.status(400).json(err);
			   } else {
					return res.json(contentsub)
			   }
		   });
	   })
   },
   deletesub: function(req, res) {
	   Sub.findOneAndRemove({'_id':req.params.subid}, function(err){
		   if(err) {
				return res.status(400).json(err);
		   } else {
				return res.json('deleted')
		   }
	   })
   }
}
