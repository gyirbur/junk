/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.attacker');
 * mod.thing == 'a thing'; // true
 */

var roleAttacker = {
    run: function (creep,myflags) {
   
     //   console.log(creep.pos)
     //   console.log(Game.flags.Post1.pos)
        var targets = creep.room.find(FIND_HOSTILE_CREEPS)
        
    var target = creep.pos.findClosestByRange(targets);
if(target !== null) {
    if(creep.attack(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}
else {
   /** var flagposted = _.filter(creep.room.find(FIND_FLAGS), (flaginroom) => flaginroom.number == 1);
    var flagpostedid = flagposted.id
    var flaggen = Game.getObjectById(flagpostedid)
    console.log(flagposted)
    console.log(flagpostedid)
    console.log(flaggen)
    **/
    //_.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    
  // var path = creep.pos.findPathTo(flagposted);

  //  console.log(path)
   
   if(creep.memory.post == '1') {
            creep.moveTo(Game.flags.Post1);
        }
        if(creep.memory.post == '2') {
            creep.moveTo(Game.flags.Post2);
        }
        if(creep.memory.post == '3') {
            creep.moveTo(Game.flags.Post3);
        }
   
    
};
    }   
};


module.exports = roleAttacker;