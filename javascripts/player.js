"use strict";

// MODULARIZED CODE - Gauntlet = global variable, gauntlet = internal variable
var Gauntlet = (function(gauntlet) {

  gauntlet.Combatants = {};

  /*
    Define the base object for any player of Gauntlet,
    whether a human player or a monster.
   */
  gauntlet.Combatants.Player = function(name) {
    this.species = null;
    this.class = null;
    this.weapon = null;
    this.playerName = $("#player-name").val() || "unknown adventurer";
    this.health = Math.floor(Math.random() * 40 + 50);

    this.toString = function() {
      var output = [this.playerName,
        ": a ",
        this.species,
        " ",
        this.class,
        " with ",
        this.health,
        " health. ",
        " Wielding a ",
        this.weapon,
        "!"
      ].join("");
      return output;
    };
  };

  gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
    this.weapon = newWeapon;

  }

  gauntlet.Combatants.Player.prototype.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();

    // Add the health bonus
    this.health += this.class.healthBonus;
    return this.class;
  };

  /*
    Define the base properties for a human in a
    constructor function.
   */
  gauntlet.Combatants.Human = function() {
    this.species = "Human";
    this.allowedClasses = ["Saiyan", "BeastMaster", "Boxer", "Samurai", "BlackMage", "Illusionist", "SailorScout", "Alchemist", "Thief", "Shinobi", "Assassin", "Scout"];
  };
  gauntlet.Combatants.Human.prototype = new gauntlet.Combatants.Player();

  return gauntlet;

})(Gauntlet || {});