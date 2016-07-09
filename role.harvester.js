/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.harvester');
 * mod.thing == 'a thing'; // true
 */

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
        }
        
        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
      /**  else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    var path = creep.room.findPath(creep.pos, targets[0].pos, {ignoreCreeps: true});
                    creep.move(path[0].direction);
                }
            }
            else {creep.moveTo(Game.flags.Muster);
                
            }
        }
    }
};
**/

if(creep.memory.upgrading) {
        //    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        //        creep.moveTo(creep.room.controller);
        //        var path = creep.room.findPath(creep.pos, creep.room.controller.pos, {ignoreCreeps: true});
        //           creep.move(path[0].direction);
        
        var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    var path = creep.room.findPath(creep.pos, targets[0].pos, {ignoreCreeps: true});
                    creep.move(path[0].direction);
                }
            }
            else {creep.moveTo(Game.flags.Muster);
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {ignoreCreeps: true});
            }
        }
    }
};
module.exports = roleHarvester;