/*Carl Smith
November 13th, 2014
Project 3
Create flowchart and program
*/

//Global Variables

var	playerhp = 100
	enemies = ["cow", "goblin", "dragon"]
	gold = 0
	weaponenchant = 0
	int = 10

//prompt
var heroname = prompt("What is your name, hero?", "")
	heroclass = prompt("Are you a wizard or are you a fighter?", "")
	

//Output

if (heroclass == "wizard"){
	console.log(heroname+ ", we need you to use your magic to help protect our village!")
}
else{
	console.log(heroname+", we need you to use your power to help protect our village!")
}


//Procedure

var PrimaryWeapon = prompt("What is your primary weapon?")
var PrimaryElement = prompt("What is your primary element? Enter fire or earth")
	if(PrimaryElement == 'fire') {
		var weapon = "Incendiary "+ PrimaryWeapon+ " of Disintigration"
		console.log("You are wielding the mythical " +weapon+ "!")
}
	else {
		var weapon = "Tremmering "+ PrimaryWeapon+ " of Obliteration"
		console.log("You are wielding the mythical " +weapon+ "!")
}

//Money (while loop)

while(gold < 300){
	console.log("You currently have "+gold+" gold!")
	console.log("You need money!")
	console.log("you can make 50 gold and hour working ont he fields!")
	var hours = prompt("How many hours would you like to work?")	
		parseInt(hours)
			gold += hours * 50
}
console.log("You currently have "+gold+" gold!")

//shop (conditional)

var buywenchant = confirm("Do you want to purchase a weapon enchantment?")
	if(buywenchant = true){
		gold -= 100
		weaponenchant+=1
			if(gold >= 900){
				gold-=100
				weaponenchant+=1
				console.log("You also buy a second weapon enchantment!")
			}
			else{
				console.log("You cant afford anything else!  Get out of my store!")
			}
				
					
	}
	else{
		console.log("You do not purchase a weapon enchantment!")
	}


//Traveling (string function)
var travel = function(direction){
	console.log("You traveled "+direction)
	return "You traveled "+direction;
	
	
}
		
confirm("It's time to go on an adventure now!")
var direction = prompt("What direction would you like to go?")
travel(direction)

//boolean function

var fight = function(ready){
	if (ready == true){
		console.log("It is "+ready+" you want to look for a fight!")
		return "It is "+ready+" you want to look for a fight!";
		
	}
	else{
		console.log("It is "+ready+" you want to look for a fight so you prepare your strategy for a few minutes and then set out to look for a battle!")
		return "It is "+ready+" you want to look for a fight so you prepare your strategy for a few minutes and then set out to look for a battle!";
		
	}
}
var ready = confirm(" are you ready to look for a fight?")
fight(ready)

//array usage
var	enemies = ["cow", "goblin", "dragon"]
console.log("There are " + enemies.length +" different enemies")


var enemychoice = prompt("To determine what you will fight, pick a number between 0 - 2", "")
parseInt(enemychoice)
if (enemychoice == 0){
	console.log("You will fight a "+enemies[0])
}
else if(enemychoice == 1){
	console.log("You will fight a "+enemies[1])
}
else{
	console.log("You will fight a "+enemies[2])
}
	

//number function
var damage = function(totaldamage){
	if (totaldamage <= 20){
		console.log("You only deal up to a total of "+totaldamage+" damage!")
		return "You only deal "+totaldamage+" damage!";
		
	}
	else{
		console.log("You can deal up to a whopping total of "+totaldamage+" damage!")
		return "You deal a whopping "+totaldamage+" damage!";
		
	}
}
var totaldamage = (int * 2 + weaponenchant * 5)
damage(totaldamage)

//battle

if(enemychoice == 0){
	for(cowhp = 100; cowhp > 0; cowhp-=totaldamage){
		for(attackprep = 5; attackprep = 0;attackprep--){
		}
	console.log("The cow has taken "+totaldamage)
	console.log("The cow has "+cowhp+" hp left")
	}
console.log("The cow is dead!")
}
else if(enemychoice ==1){
	for(goblinhp = 200; goblinhp > 0; goblinhp-=totaldamage){
	    for(attackprep = 5; attackprep = 0;attackprep--){
			
		}
		console.log("The goblin has taken "+totaldamage)
		console.log("The goblin has "+goblinhp+" hp left")
		
	}

console.log("The goblin is dead!")
}
else{
	for(dragonhp = 600; dragonhp > 0; dragonhp-=totaldamage){
		for(attackprep = 5; attackprep = 0;attackprep--){
		}
		console.log("The dragon has taken "+totaldamage)
		console.log("The dragon has "+dragonhp+" hp left")
		
	}
console.log("The dragon is dead!")
}

//returned values
console.log("The returned values are:")
console.log(travel(direction))
console.log(fight(ready))
console.log(damage(totaldamage))

//ending output

confirm("The great journey is now over, and you leave victoriously!")