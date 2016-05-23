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
    this.strengthBonus = 0;
    this.intelligenceBonus = 0;
    this.magical = false;

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
    this.strengthBonus = 10;
  };
  gauntlet.GuildHall.Fighter.prototype = new gauntlet.GuildHall.PlayerClass();


  gauntlet.GuildHall.Saiyan = function() {
    this.name = "Saiyan";
    this.healthBonus = this.healthBonus + 25;
    this.strengthBonus = this.strengthBonus + 40;
  };
  gauntlet.GuildHall.Saiyan.prototype = new gauntlet.GuildHall.Fighter();


  gauntlet.GuildHall.BeastMaster = function() {
    this.name = "BeastMaster";
    this.healthBonus = this.healthBonus + 20;
    this.strengthBonus = this.strengthBonus + 20;
  };
  gauntlet.GuildHall.BeastMaster.prototype = new gauntlet.GuildHall.Fighter();


  gauntlet.GuildHall.Boxer = function() {
    this.name = "Boxer";
    this.healthBonus = this.healthBonus + 15;
    this.strengthBonus = this.strengthBonus + 30;
  };
  gauntlet.GuildHall.Boxer.prototype = new gauntlet.GuildHall.Fighter();


  gauntlet.GuildHall.Samurai = function() {
    this.name = "Samurai";
    this.healthBonus = this.healthBonus + 19;
    this.strengthBonus = this.strengthBonus + 25;
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
    this.strengthBonus = this.strengthBonus - 20;
    this.intelligenceBonus = this.intelligenceBonus + 20;
  };
  gauntlet.GuildHall.Mage.prototype = new gauntlet.GuildHall.PlayerClass();


  gauntlet.GuildHall.Shaman = function() {
    this.name = "Shaman";
    this.healthBonus = this.healthBonus + 5;
    this.strengthBonus = this.strengthBonus - 10;
    this.intelligenceBonus = this.intelligenceBonus + 20;
  };
  gauntlet.GuildHall.Shaman.prototype = new gauntlet.GuildHall.Mage();


  gauntlet.GuildHall.Wizard = function() {
    this.name = "Wizard";
    this.healthBonus = this.healthBonus - 15;
    this.strengthBonus = this.strengthBonus - 25;
    this.intelligenceBonus = this.intelligenceBonus + 40;
  };
  gauntlet.GuildHall.Wizard.prototype = new gauntlet.GuildHall.Mage();


  gauntlet.GuildHall.Conjurer = function() {
    this.name = "Conjurer";
    this.strengthBonus = this.strengthBonus - 10;
    this.intelligenceBonus = this.intelligenceBonus + 10;
  };
  gauntlet.GuildHall.Conjurer.prototype = new gauntlet.GuildHall.Mage();


  gauntlet.GuildHall.Sorcerer = function() {
    this.name = "Sorcerer";
    this.healthBonus = this.healthBonus - 5;
    this.strengthBonus = this.strengthBonus - 20;
    this.intelligenceBonus = this.intelligenceBonus + 30;
  };
  gauntlet.GuildHall.Sorcerer.prototype = new gauntlet.GuildHall.Mage();

  /*
      STEALTH CLASSES
        - Thief
        - Shinobi
        - Assassin
        - Scout
   */

  return gauntlet;

})(Gauntlet || {});
