/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.builder');
 * mod.thing == 'a thing'; // true
 */

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
        }

        if(creep.memory.building) {
            var targets = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if(targets !== null) {
                if(creep.build(targets) == ERR_NOT_IN_RANGE) {
                    //creep.moveTo(targets);
                    var path = creep.room.findPath(creep.pos, targets.pos, {ignoreCreeps: true});
                    creep.move(path[0].direction);
                }
            }
            else {
                creep.moveTo(Game.flags.Muster);
            }
        }
        else {
            var sources = creep.pos.findClosestByRange(FIND_SOURCES);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
        }
    }
};

module.exports = roleBuilder;