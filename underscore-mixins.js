/* jshint asi:true */

var mixins = {
    distance: function(p1, p2) {
    var x = Math.pow(p2.x - p1.x,2);
    var y = Math.pow(p2.y - p1.y,2);
    return Math.sqrt(x + y);
  },
  translate: function(pos,callback){
    con.save();
    con.translate(pos.x,pos.y)
    callback()
    con.restore();
  }
}

if(typeof require != 'undefined'){
    module.exports = mixins;
} else {
    _.mixin(mixins);
}
