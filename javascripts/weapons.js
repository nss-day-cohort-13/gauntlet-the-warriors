"use strict";

// MODULARIZED CODE - Gauntlet = global variable, gauntlet = internal variable
var Gauntlet = (function(gauntlet) {
  gauntlet.Weapons = {};

  gauntlet.Weapons.Weapon = function() {
    this.name = "bare hands";
    this.damage = 1;

    this.toString = function() {
      return this.name;
    }
  };

  gauntlet.Weapons.Dagger = function() {
    this.name = "dagger";
    this.damage = 4;
  };
  gauntlet.Weapons.Dagger.prototype = new gauntlet.Weapons.Weapon();

  gauntlet.Weapons.BroadSword = function() {
    this.name = "broad sword";
    this.damage = 14;
  };
  gauntlet.Weapons.BroadSword.prototype = new gauntlet.Weapons.Weapon();

  gauntlet.Weapons.WarAxe = function() {
    this.name = "war axe";
    this.damage = 18;
  };
  gauntlet.Weapons.WarAxe.prototype = new gauntlet.Weapons.Weapon();

  gauntlet.Weapons.Blunderbuss = function() {
    this.name = "blunderbuss";
    this.damage = 20;
  };
  gauntlet.Weapons.Blunderbuss.prototype = new gauntlet.Weapons.Weapon();

  gauntlet.Weapons.N1911 = function() {
    this.name = "1911";
    this.damage = 23;
  };
  gauntlet.Weapons.N1911.prototype = new gauntlet.Weapons.Weapon();

  gauntlet.Weapons.Garand = function() {
    this.name = "garand";
    this.damage = 30;
  };
  gauntlet.Weapons.Garand.prototype = new gauntlet.Weapons.Weapon();

  gauntlet.Weapons.Kalashnikov = function() {
    this.name = "kalashnikov";
    this.damage = 25;
  };
  gauntlet.Weapons.Kalashnikov.prototype = new gauntlet.Weapons.Weapon();

  return gauntlet;

})(Gauntlet || {});


