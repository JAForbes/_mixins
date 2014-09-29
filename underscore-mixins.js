/* jshint asi:true */

var isNode = typeof require != 'undefined';

if(isNode){
	var _ = require('lodash');
}
var mixins = {
	distance: function(p1, p2) {
		var x = Math.pow(p2.x - p1.x,2);
		var y = Math.pow(p2.y - p1.y,2);
		return Math.sqrt(x + y);
	},
	//assumes there is a global for the canvas context called `con`
	translate: function(pos,callback){
		con.save();
		con.translate(pos.x,pos.y)
		callback()
		con.restore();
	},

	//assumes we have lodash curry
	applyOn: _.curry(function(context,fn,args){
	  fn.apply(context,args)
	})
}

if(isNode){
    module.exports = mixins;
} else {
    _.mixin(mixins);
}
