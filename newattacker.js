/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('newattacker');
 * mod.thing == 'a thing'; // true
 */

var NewAttacker = {
    run: function (attackers) {
if(attackers.length > 0) {
    var posts = _.groupBy(attackers,'post');
    var NextPostlist = _.forEach(posts,function(length) {
        if( length == 0 ) { return i++}
        else{ return null};
    });
    
}

else{ var NextPostlist = [1]};
return _.head(NextPostlist);
        
    }
};
module.exports = NewAttacker;