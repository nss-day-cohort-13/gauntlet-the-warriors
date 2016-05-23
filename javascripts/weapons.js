"use strict";

// MODULARIZED CODE - Gauntlet = global variable, gauntlet = internal variable
var Gauntlet = (function(gauntlet) {
  gauntlet.Weapons = {};

  gauntlet.Weapons.Weapon = function() {
    this.name = "bare hands";
    this.damage = 40;
    this.hands = 2;

    this.toString = function() {
      return this.name;
    }
  };

  gauntlet.Weapons.Dagger = function() {
    this.name = "dagger";
    this.damage = 4;
    this.hands = 1;
  };
  gauntlet.Weapons.Dagger.prototype = new gauntlet.Weapons.Weapon();

  gauntlet.Weapons.BroadSword = function() {
    this.name = "broad sword";
    this.damage = 14;
    this.hands = 2;
  };
  gauntlet.Weapons.BroadSword.prototype = new gauntlet.Weapons.Weapon();

  gauntlet.Weapons.WarAxe = function() {
    this.name = "war axe";
    this.damage = 18;
    this.hands = 2;
  };
  gauntlet.Weapons.WarAxe.prototype = new gauntlet.Weapons.Weapon();

  return gauntlet;

})(Gauntlet || {});


