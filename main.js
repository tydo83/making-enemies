// Your code here.
const makeBoss = function(enemy) {
  const bossEnemy = {
    name: enemy.name,
    attackDamage: enemy.attackDamage,
    boss: true,
    level: enemy.level,
    alive: enemy.alive,
    hitPoints: enemy.hitPoints,
  }
  return bossEnemy;
}

const levelUp = function(enemy) {
  const leveledUpEnemy = {
    name: enemy.name,
    attackDamage: enemy.attackDamage,
    boss: enemy.boss,
    level: enemy.level + 1,
    alive: enemy.alive,
    hitPoints: enemy.hitPoints,
  }
  return leveledUpEnemy;
}

function buff(enemy) {
  const buffedEnemy = {
    name: enemy.name,
    attackDamage: enemy.attackDamage + 15,
    boss: enemy.boss,
    level: enemy.level,
    alive: enemy.alive,
    hitPoints: enemy.hitPoints,
  }
  return buffedEnemy;
}

const makeSuper = function(enemy) {
  const superEnemy = {
    name: "Super " + enemy.name,
    attackDamage: enemy.attackDamage,
    boss: enemy.boss,
    level: enemy.level,
    alive: enemy.alive,
    hitPoints: enemy.hitPoints,
  }
  return superEnemy;
}

const hitEnemy = function(enemy) {
  const hitEnemy = {
    name: enemy.name,
    attackDamage: enemy.attackDamage,
    boss: enemy.boss,
    level: enemy.level,
    alive: enemy.hitPoints - 10 > 0, //maybe need a new syntax?
    hitPoints: enemy.hitPoints - 10,
  }
  
  return hitEnemy;
}

const beastMode = function(enemy) {
  const beastEnemy = {
    name: "Super " + enemy.name,
    attackDamage: enemy.attackDamage + 15,
    boss: true,
    level: enemy.level + 1,
    alive: true,
    hitPoints: enemy.hitPoints,
  }
  return beastEnemy;
}

// Our code here. Don't touch!
if (typeof makeBoss === 'undefined') {
  makeBoss = undefined
}

if (typeof levelUp === 'undefined') {
  levelUp = undefined
}

if (typeof buff === 'undefined') {
  buff = undefined
}

if (typeof makeSuper === 'undefined') {
  makeSuper = undefined
}

if (typeof hitEnemy === 'undefined') {
  hitEnemy = undefined
}

if (typeof beastMode === 'undefined') {
  beastMode = undefined
}


module.exports = {
  makeBoss,
  levelUp,
  buff,
  makeSuper,
  hitEnemy,
  beastMode,
}
