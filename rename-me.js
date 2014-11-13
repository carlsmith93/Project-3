/*Carl Smith
November 13th, 2014
Project 3
Create flowchart and program
*/

//Global Variables

var	
	cowhp = 100
	goblinhp = 300
	dragonhp = 600
	enemies = ["cow", "goblin", "dragon"]
	statpoints = 10
	statpoints2 = 0
	statpoints3 = 0
	weaponenchant = 0
	gold = 0
	level = [1,2,3]
	exp = [1000, 2000, 10000]
	
	

//prompt
var heroname = prompt("What is your name, hero?", "")
	heroclass = prompt("Are you a wizard or are you a fighter?", "")
	

//Output

if (heroclass === "wizard"){
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
	}
	else{
		console.log("You do not purchase a weapon enchantment!")
	}

		
	