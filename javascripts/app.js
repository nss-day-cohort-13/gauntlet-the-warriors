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


    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "" && userCharacter);
        userCharacter.playerName = $("#player-name").val();
        console.log("user", userCharacter);
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "") && playerClass !== "";
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "") && playerWeapon !== "";
        $(".play-again-link").hide();
        $(".prepare").hide().slideDown(2000);
        $("#attack_battleground").hide().fadeIn(4000);
        console.log("Player", Gauntlet.Combatants.Player);
        $("#player_battleground").hide()
        $("#player_battleground").html("<h1>" + "Our Hero" + "</h1>" +
                                      "<p>Name:  " + userCharacter.playerName + "</p>" +
                                      "<p>Specie:  " + userCharacter.species + "</p>" +
                                      "<p>Class:  " + userCharacter.class + "</p>" +
                                      "<p>Weapon:  " + userCharacter.weapon + "</p>" +
                                      "<p id='hero-health'>Health:  " + userCharacter.health + "</p>").fadeIn(1800);

        enemy = new Gauntlet.Combatants.Orc();
        enemy.generateClass();
        enemy.setWeapon(new Gauntlet.Weapons.Weapon);
        $("#enemy_battleground").hide()
        $("#enemy_battleground").html("<h1>" + "Enemy" + "</h1>" +
                                      "<p>Name:  " + enemy.playerName + "</p>" +
                                      "<p>Specie:  " + enemy.species + "</p>" +
                                      "<p>Class:  " + enemy.class + "</p>" +
                                      "<p>Weapon:  " + enemy.weapon + "</p>" +
                                      "<p id='enemy-health'>Health:  " + enemy.health + "</p>").fadeIn(1800);
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
      case "Saiyan":
        userCharacter.class = new Gauntlet.GuildHall.Saiyan();
        console.log("userCharacter", userCharacter);
        break;
      case "Beast Master":
        userCharacter.class = new Gauntlet.GuildHall.BeastMaster();
        console.log("userCharacter", userCharacter);
        break;
      case "Boxer":
        userCharacter.class = new Gauntlet.GuildHall.Boxer();
        console.log("userCharacter", userCharacter);
        break;
      case "Samurai":
        userCharacter.class = new Gauntlet.GuildHall.Samurai();
        console.log("userCharacter", userCharacter);
        break;
      case "Black Mage":
        userCharacter.class = new Gauntlet.GuildHall.BlackMage();
        console.log("userCharacter", userCharacter);
        break;
      case "Illusionist":
        userCharacter.class = new Gauntlet.GuildHall.Illusionist();
        console.log("userCharacter", userCharacter);
        break;
      case "Sailor Scout":
        userCharacter.class = new Gauntlet.GuildHall.SailorScout();
        console.log("userCharacter", userCharacter);
        break;
      case "Alchemist":
        userCharacter.class = new Gauntlet.GuildHall.Alchemist();
        console.log("userCharacter", userCharacter);
        break;
      case "Thief":
        userCharacter.class = new Gauntlet.GuildHall.Thief();
        console.log("userCharacter", userCharacter);
        break;
      case "Shinobi":
        userCharacter.class = new Gauntlet.GuildHall.Shinobi();
        console.log("userCharacter", userCharacter);
        break;
      case "Assassin":
        userCharacter.class = new Gauntlet.GuildHall.Assassin();
        console.log("userCharacter", userCharacter);
        break;
      case "Scout":
        userCharacter.class = new Gauntlet.GuildHall.Scout();
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
      case "Dagger":
        userCharacter.weapon = new Gauntlet.Weapons.Dagger();
        console.log("userCharacter weapon: ", userCharacter);
        break;
      case "Broad Sword":
        userCharacter.weapon = new Gauntlet.Weapons.BroadSword();
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
        case "1911":
      userCharacter.weapon = new Gauntlet.Weapons.N1911();
        console.log("userCharacter weapon: ", userCharacter);
        break;
      case "Garand":
      userCharacter.weapon = new Gauntlet.Weapons.Garand();
        console.log("userCharacter weapon: ", userCharacter);
        break;
      case "Kalashnikov":
      userCharacter.weapon = new Gauntlet.Weapons.Kalashnikov();
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
        $('#enemy-health').html("You slaughtered the Enemy!");
        $('#hero-health').html("You live to see another day!");
        $(".attack__link").attr('disabled', true);
        console.log("You Win!");
    } else if (userCharacter.health <= 0) {
        $('#hero-health').html("You were slaughtered!");
        $('#enemy-health').html("The Enemy has killed our Hero!" );
        $(".attack__link").attr('disabled', true);
        console.log("You Lose!");
    } else {
        return;
    }

        $(".play-again-link").fadeIn(5000);
  })
        $(".play-again-link").click(function(e) {
    location.reload();
});

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});