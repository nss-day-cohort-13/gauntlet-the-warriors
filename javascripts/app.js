"use strict";
/*
  Test code to generate a human player and an orc player
 */
// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new Gauntlet.Weapons.WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new Gauntlet.Weapons.BroadSword());
// console.log(orc.toString());

$(document).ready(function() {

  // Global variable for enemy
  var enemy

  //Variables storing player's name, class, and weapon choices
  var userCharacter = new Gauntlet.Combatants.Human();
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

    // Switch statement determines what happens when the screens move forward
    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "" && userCharacter);
        userCharacter.playerName = $("#player-name").val();
        console.log(userCharacter.playerName + " is our Hero!");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "") && playerClass !== "";
        console.log("You have chosen the " + playerClass + " class.");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "") && playerWeapon !== "";
        console.log("You have chosen the " + playerWeapon + " as your weapon.", "Go defeat your enemies!");

        $("#player_battleground").html("<h1>" + "Our Hero" + "</h1>" +
                                      "<p>" + userCharacter.playerName + "</p>" +
                                      "<p>" + userCharacter.species + "</p>" +
                                      "<p>" + userCharacter.class + "</p>" +
                                      "<p>" + userCharacter.weapon + "</p>" +
                                      "<p id='hero-health'>" + userCharacter.health + "</p>");

        enemy = new Gauntlet.Combatants.Orc();
        enemy.generateClass();
        enemy.generateWeapon();
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
    switch (playerClass) {
      case "Saiyan":
        userCharacter.class = new Gauntlet.GuildHall.Saiyan();
        break;
      case "Beast Master":
        userCharacter.class = new Gauntlet.GuildHall.BeastMaster();
        break;
      case "Boxer":
        userCharacter.class = new Gauntlet.GuildHall.Boxer();
        break;
      case "Samurai":
        userCharacter.class = new Gauntlet.GuildHall.Samurai();
        break;
      case "Black Mage":
        userCharacter.class = new Gauntlet.GuildHall.BlackMage();
        break;
      case "Illusionist":
        userCharacter.class = new Gauntlet.GuildHall.Illusionist();
        break;
      case "Sailor Scout":
        userCharacter.class = new Gauntlet.GuildHall.SailorScout();
        break;
      case "Alchemist":
        userCharacter.class = new Gauntlet.GuildHall.Alchemist();
        break;
      case "Thief":
        userCharacter.class = new Gauntlet.GuildHall.Thief();
        break;
      case "Shinobi":
        userCharacter.class = new Gauntlet.GuildHall.Shinobi();
        break;
      case "Assassin":
        userCharacter.class = new Gauntlet.GuildHall.Assassin();
        break;
      case "Scout":
        userCharacter.class = new Gauntlet.GuildHall.Scout();
        break;
      case "surprise me":
        userCharacter.generateClass();
        break;
    }
  });

  $(".weapon__link").click(function(e) {
    playerWeapon = $(this).find(".btn__text").html();
    switch (playerWeapon) {
      case "Bare Fists":
        userCharacter.weapon = new Gauntlet.Weapons.Weapon();
        break;
      case "Dagger":
        userCharacter.weapon = new Gauntlet.Weapons.Dagger();
        break;
      case "Broad Sword":
        userCharacter.weapon = new Gauntlet.Weapons.BroadSword();
        break;
      case "War Axe":
        userCharacter.weapon = new Gauntlet.Weapons.WarAxe();
        break;
      case "Blunderbuss":
        userCharacter.weapon = new Gauntlet.Weapons.Blunderbuss();
        break;
      case "1911":
        userCharacter.weapon = new Gauntlet.Weapons.N1911();
        break;
      case "Garand":
        userCharacter.weapon = new Gauntlet.Weapons.Garand();
        break;
      case "Kalashnikov":
        userCharacter.weapon = new Gauntlet.Weapons.Kalashnikov();
        break;
    }
  });

// Calculates attack damage and substracts it from combatants health. Announces winner
  $(".attack__link").click(function(e) {
    enemy.health -= userCharacter.weapon.damage;
    $('#enemy-health').html(enemy.health);
    userCharacter.health -= enemy.weapon.damage;
    $('#hero-health').html(userCharacter.health);
    if (enemy.health <= 0) {
        $('#enemy-health').html("Your Enemy is Slain");
        $('#hero-health').html("You are Victorious!");
        $("button").attr('disabled', true);
        console.log("You Win!");
    } else if (userCharacter.health <= 0) {
        $('#hero-health').html("You Have Been Slain");
        $('#enemy-health').html("The Enemy Has Won!");
        $("button").attr('disabled', true);
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