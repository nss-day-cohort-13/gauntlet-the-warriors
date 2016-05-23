"use strict";
/*
  Test code to generate a human player and an orc player
 */
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new Gauntlet.Weapons.WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new Gauntlet.Weapons.BroadSword());
console.log(orc.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() {

  //Variables storing player's class and weapon choices
  var playerClass = "";
  var playerWeapon = "";
  var classSelection
  var weaponSelection

  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;


    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "") && playerClass !== "";
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "") && playerWeapon !== "";

        console.log("class: ", classSelection);
        console.log("weapon: ", weaponSelection);

        var enemy = new Gauntlet.Combatants.Orc();
        enemy.generateClass();
        console.log(enemy);
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  $(".class__link").click(function(e) {
    playerClass = $(this).find(".btn__text").html();
    console.log("class of ", playerClass);
    classSelection = new Gauntlet.GuildHall.Warrior();
    console.log(classSelection);
  });

  $(".weapon__link").click(function(e) {
    playerWeapon = $(this).find(".btn__text").html();
    console.log("player is wielding ", playerWeapon);
    weaponSelection = new Gauntlet.Weapons.Weapon();
    console.log(weaponSelection);
  });

  $(".attack__link").click(function(e) {
    console.log("Attack!");

  })

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});