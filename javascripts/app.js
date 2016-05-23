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
orc.setWeapon(new Gauntlet.Weapons.Sword());
console.log(orc.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() {

  var enemy

  //Variables storing player's name, class, and weapon choices
  var userCharacter = new Gauntlet.Combatants.Human();
  var user1Name = $("#player-name").val();
  var playerClass = "";
  var playerWeapon = "";

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
        moveAlong = ($("#player-name").val() !== "" && userCharacter);
        console.log("user", userCharacter);
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "") && playerClass !== "";
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "") && playerWeapon !== "";

        console.log("Player", Gauntlet.Combatants.Player);

        $("#player_battleground").html("<h1>" + "Our Hero" + "</h1>" +
                                      "<p>" + user1Name + "</p>" +
                                      "<p>" + userCharacter.species + "</p>" +
                                      "<p>" + userCharacter.class + "</p>" +
                                      "<p>" + userCharacter.weapon + "</p>" +
                                      "<p id='hero-health'>" + userCharacter.health + "</p>");

        enemy = new Gauntlet.Combatants.Orc();
        enemy.generateClass();
        enemy.setWeapon(new Gauntlet.Weapons.Weapon);
        console.log(enemy);
        $("#enemy_battleground").html("<h1>" + "Enemy" + "</h1>" +
                                      "<p>" + enemy.playerName + "</p>" +
                                      "<p>" + enemy.species + "</p>" +
                                      "<p>" + enemy.class + "</p>" +
                                      "<p>" + enemy.weapon + "</p>" +
                                      "<p id='enemy-health'>" + enemy.health + "</p>");
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
    console.dir(playerClass);
    switch (playerClass) {
      case "Warrior":
        userCharacter.class = new Gauntlet.GuildHall.Warrior();
        console.log("userCharacter", userCharacter);
        break;
      case "Valkyrie":
        userCharacter.class = new Gauntlet.GuildHall.Valkyrie();
        console.log("userCharacter", userCharacter);
        break;
    }
  });

  $(".weapon__link").click(function(e) {
    playerWeapon = $(this).find(".btn__text").html();
    console.log("player is wielding ", playerWeapon);
    switch (playerWeapon) {
      case "Bare Fists":
        userCharacter.weapon = new Gauntlet.Weapons.Weapon();
        console.log("userCharacter weapon: ", userCharacter);
        break;
      case "Sword":
        userCharacter.weapon = new Gauntlet.Weapons.Sword();
        console.log("userCharacter weapon: ", userCharacter);
        break;
      case "War Axe":
        userCharacter.weapon = new Gauntlet.Weapons.WarAxe();
        console.log("userCharacter weapon: ", userCharacter);
        break;
      case "Blunderbuss":
      userCharacter.weapon = new Gauntlet.Weapons.Blunderbuss();
        console.log("userCharacter weapon: ", userCharacter);
        break;
    }
  });

// check functionality after player info is captured & added to DOM
  $(".attack__link").click(function(e) {
    console.log("Attack!");
    enemy.health -= userCharacter.weapon.damage;
    console.log(enemy.health);
    $('#enemy-health').html(enemy.health);
    userCharacter.health -= enemy.weapon.damage;
    console.log(userCharacter.health);
    $('#hero-health').html(userCharacter.health);
    if (enemy.health <= 0) {
        $(".attack__link").disabled;
        console.log("You Win!");
    } else if (userCharacter.health <= 0) {
        $(".attack__link").disabled;
        console.log("You Lose!");
    } else {
        return;
    }
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