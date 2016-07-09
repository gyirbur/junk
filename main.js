var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleUpgraders1 = require('upsub1');
var roleBuilder = require('role.builder');
var roleAttacker = require('role.attacker');
var NewAttacker = require('newattacker');
var sortBy = require('sort');

module.exports.loop = function () {

 for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
}

/**
    var tower = Game.getObjectById('TOWER_ID');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }   
**/
     var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    /**console.log('Harvesters: ' + harvesters.length);**/
     var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    /**console.log('Upgraders: ' + upgraders.length);**/
    var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var workers = _.filter(Game.creeps, (creep) => creep.memory.role == 'worker');
    var myflags = Game.flags;
/**
var subtypes = [{subtype: harvesters, tname: 'harvester', body: [WORK,CARRY,CARRY,MOVE,MOVE,MOVE]}]
for(i in subtypes){
var subtype = i.subtype;
var tname = i.tname;
var body = i.body;


    if(subtype.length < 3) {
        var newName = Game.spawns.Spawn1.createCreep(body, undefined, {role: tname});
        if(newName == ERR_NOT_ENOUGH_ENERGY) {
            console.log('Needs energy to spawn ' + tname);
        }
        else {
        if(newName == ERR_BUSY) {
            console.log('Busy with something else');
        }
        else {
        console.log('Spawning new ' + tname + ': ' + newName);
        }
        }
}
}
**/

    if(_.filter(Game.creeps, (creep) => creep.memory.role == 'upsub1').length < 5) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'upsub1'});
        if(newName == ERR_NOT_ENOUGH_ENERGY) {
            console.log('Needs energy to spawn upsub1');
        }
        else {
        if(newName == ERR_BUSY) {
            console.log('Busy with something else');
        }
        else {
        console.log('Spawning new upgrader Sub Catagory 1: ' + newName);
        }
        }
}

     if(builders.length < 3) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder'});
        if(newName == ERR_NOT_ENOUGH_ENERGY) {
            console.log('Needs energy to spawn builder');
        }
        else {
        if(newName == ERR_BUSY) {
            console.log('Busy with something else');
        }
        else {
        console.log('Spawning new builder: ' + newName);
        }
        }
}

if(workers.length < 4) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'worker',HP: -1});
        if(newName == ERR_NOT_ENOUGH_ENERGY) {
            console.log('Needs energy to spawn worker');
        }
        else {
        if(newName == ERR_BUSY) {
            console.log('Busy with something else');
        }
        else {
        console.log('Spawning new worker: ' + newName);
        }
        }
}


///**
if(attackers.length < 1) {
        NextPost = NewAttacker.run(attackers);
        var newName = Game.spawns.Spawn1.createCreep([ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], undefined, {role: 'attacker', post: NextPost});
        if(newName == ERR_NOT_ENOUGH_ENERGY) {
            console.log('Needs energy to spawn attacker');
        }
        else {
        if(newName == ERR_BUSY) {
            console.log('Busy with something else');
        }
        else {
        console.log('Spawning new attacker: ' + newName);
        }
        }
}
//**/
    
    if(upgraders.length < 0) {
       /** var lastone = _.last(upgraders)
        var nextnum = (parseInt(self.val().replace(/\D+/g, lastone )) + 1).toString; **/
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], /**'Upgrader'.concat(nextnum) **/ undefined , {role: 'upgrader'});
        if(newName == ERR_NOT_ENOUGH_ENERGY) {
            console.log('Needs energy to spawn upgrader');
        }
        else {
        if(newName == ERR_BUSY) {
            console.log('Busy with something else');
        }
        else {
        console.log('Spawning new upgrader: ' + newName);
        }
        }
}

if(harvesters.length < 6) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'harvester'});
        if(newName == ERR_NOT_ENOUGH_ENERGY) {
            console.log('Needs energy to spawn harvester');
        }
        else {
        if(newName == ERR_BUSY) {
            console.log('Busy with something else');
        }
        else {
        console.log('Spawning new harvester: ' + newName);
        }
        }
}

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'attacker') {
            roleAttacker.run(creep,myflags);
        }
        if(creep.memory.role == 'upsub1') {
            roleUpgraders1.run(creep);
        }
        if(creep.memory.role == 'worker') {
            roleWorker.run(creep);
        }
    }
}