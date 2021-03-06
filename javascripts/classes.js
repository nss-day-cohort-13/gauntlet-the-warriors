"use strict";

// MODULARIZED CODE - Gauntlet = global variable, gauntlet = internal variable
var Gauntlet = (function(gauntlet) {

  gauntlet.GuildHall = {};

  /*
    Base function for a player, or enemy, class (profession)
   */
  gauntlet.GuildHall.PlayerClass = function() {
    this.name = "Beggar";
    this.healthBonus = 0;

    this.toString = function() {
      return this.name;
    }
  };

  /*
      FIGHTER CLASSES
        - Saiyan
        - Beast Master
        - Boxer
        - Samurai
   */

  gauntlet.GuildHall.Fighter = function() {
    this.healthBonus = 20;
  };
  gauntlet.GuildHall.Fighter.prototype = new gauntlet.GuildHall.PlayerClass();


  gauntlet.GuildHall.Saiyan = function() {
    this.name = "Saiyan";
    this.healthBonus = this.healthBonus + 25;
  };
  gauntlet.GuildHall.Saiyan.prototype = new gauntlet.GuildHall.Fighter();


  gauntlet.GuildHall.BeastMaster = function() {
    this.name = "Beast Master";
    this.healthBonus = this.healthBonus + 20;
  };
  gauntlet.GuildHall.BeastMaster.prototype = new gauntlet.GuildHall.Fighter();


  gauntlet.GuildHall.Boxer = function() {
    this.name = "Boxer";
    this.healthBonus = this.healthBonus + 15;
  };
  gauntlet.GuildHall.Boxer.prototype = new gauntlet.GuildHall.Fighter();


  gauntlet.GuildHall.Samurai = function() {
    this.name = "Samurai";
    this.healthBonus = this.healthBonus + 19;
  };
  gauntlet.GuildHall.Samurai.prototype = new gauntlet.GuildHall.Fighter();


  /*
      MAGICAL CLASSES
        - Black Mage
        - Illusionist
        - Sailor Scout
        - Alchemist
   */

  gauntlet.GuildHall.Mage = function() {
    this.name = "Mage";
    this.magical = true;
    this.healthBonus = this.healthBonus - 10;
  };
  gauntlet.GuildHall.Mage.prototype = new gauntlet.GuildHall.PlayerClass();


  gauntlet.GuildHall.BlackMage = function() {
    this.name = "Black Mage";
    this.healthBonus = this.healthBonus + 10;
  };
  gauntlet.GuildHall.BlackMage.prototype = new gauntlet.GuildHall.Mage();


  gauntlet.GuildHall.Illusionist = function() {
    this.name = "Illusionist";
    this.healthBonus = this.healthBonus - 15;
  };
  gauntlet.GuildHall.Illusionist.prototype = new gauntlet.GuildHall.Mage();


  gauntlet.GuildHall.SailorScout = function() {
    this.name = "SailorScout";
    this.healthBonus = this.healthBonus - 5;
  };
  gauntlet.GuildHall.SailorScout.prototype = new gauntlet.GuildHall.Mage();


  gauntlet.GuildHall.Alchemist = function() {
    this.name = "Alchemist";
    this.healthBonus = this.healthBonus - 5;
  };
  gauntlet.GuildHall.Alchemist.prototype = new gauntlet.GuildHall.Mage();

  /*
      STEALTH CLASSES
        - Thief
        - Shinobi
        - Assassin
        - Scout
   */


gauntlet.GuildHall.Stealth = function() {
    this.name = "Stealth";
    this.stealthy = true;
    this.healthBonus = this.healthBonus - 10;
  };
  gauntlet.GuildHall.Stealth.prototype = new gauntlet.GuildHall.PlayerClass();


   gauntlet.GuildHall.Thief = function() {
    this.name = "Thief";
    this.healthBonus = this.healthBonus - 15;
  };
  gauntlet.GuildHall.Thief.prototype = new gauntlet.GuildHall.Stealth();

  gauntlet.GuildHall.Shinobi = function() {
    this.name = "Shinobi";
    this.healthBonus = this.healthBonus - 15;
  };
  gauntlet.GuildHall.Shinobi.prototype = new gauntlet.GuildHall.Stealth();

  gauntlet.GuildHall.Assassin = function() {
    this.name = "Assassin";
    this.healthBonus = this.healthBonus - 15;
  };
  gauntlet.GuildHall.Assassin.prototype = new gauntlet.GuildHall.Stealth();

  gauntlet.GuildHall.Scout = function() {
    this.name = "Scout";
    this.healthBonus = this.healthBonus - 15;
  };
  gauntlet.GuildHall.Scout.prototype = new gauntlet.GuildHall.Stealth();

  return gauntlet;

})(Gauntlet || {});
