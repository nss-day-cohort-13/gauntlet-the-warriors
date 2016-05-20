"use strict";

var Gauntlet = Gauntlet || {};
Gauntlet.Weapons = {};

Gauntlet.Weapons.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

Gauntlet.Weapons.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Gauntlet.Weapons.Dagger.prototype = new Gauntlet.Weapons.Weapon();

Gauntlet.Weapons.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Gauntlet.Weapons.BroadSword.prototype = new Gauntlet.Weapons.Weapon();

Gauntlet.Weapons.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.Weapons.WarAxe.prototype = new Gauntlet.Weapons.Weapon();

