"use strict";

// MODULARIZED CODE - Gauntlet = global variable, gauntlet = internal variable
var Gauntlet = (function(gauntlet) {

  gauntlet.Combatants.Orc = function() {
    this.health = this.health + 20;
    this.species = "Orc";
    this.allowedClasses = ["Saiyan", "BeastMaster", "Boxer", "Samurai", "BlackMage", "Illusionist", "SailorScout", "Alchemist", "Thief", "Shinobi", "Assassin", "Scout"];
    this.allowedWeapons = ["Weapon", "Dagger", "BroadSword", "WarAxe", "Blunderbuss", "N1911", "Garand", "Kalashnikov"];

    this.generateClass = function() {
      // Get a random index from the allowed classes array
      var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

      // Get the string at the index
      var randomClass = this.allowedClasses[random];

      // Composes the corresponding player class into the player object
      this.class = new Gauntlet.GuildHall[randomClass]();
      return this.class;
    }

    this.generateWeapon = function() {
      var random = Math.round(Math.random() * (this.allowedWeapons.length - 1));
      var randomWeapon = this.allowedWeapons[random];
      this.weapon = new Gauntlet.Weapons[randomWeapon]();
      return this.weapon;
    }
  };

  gauntlet.Combatants.Orc.prototype = new gauntlet.Combatants.Player();

  return gauntlet;

})(Gauntlet || {});

