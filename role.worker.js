/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.builder');
 * mod.thing == 'a thing'; // true
 */
var sortBy = require('sort');
var roleWorker = {

    /** @param {Creep} creep **/
    run: function(creep) {
var target
        if(creep.memory.working && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        if(!creep.memory.working && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }
        if(creep.memory.HP == -1 && creep.memory.working == true) {
            targets = creep.room.find(FIND_MY_STRUCTURES);
            target = soryBy (targets, {prop: 'hits'});
            creep.memory.HP = target.hits;
        }
        

        if(creep.memory.working) {
            if(targets !== null) {
                if(creep.repair(target) == ERR_NOT_IN_RANGE) {
                    //creep.moveTo(targets);
                    var path = creep.room.findPath(creep.pos, target.pos, {ignoreCreeps: true});
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

module.exports = roleWorker;