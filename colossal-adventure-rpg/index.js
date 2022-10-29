const readline = require("readline-sync");
const chalk = require('chalk');
let itemsInventory = [
    {type: "sword",color: (chalk.whiteBright("White")), typeBuff: "damange dealt", buff: 0}, 
    {type: "armor", color: (chalk.whiteBright("White")), typeBuff: "health points",buff: 0}, 
    {type: "shield", color: (chalk.whiteBright("White")), typeBuff: "damage recieved", buff: 0} 
];
const maxHP = 40;
let enemyDebuff = 1;
let enemyHP = 0;
let damageDeltBuff = (itemsInventory[0].buff + 1)
let damagerecieved = itemsInventory[2].buff

let hp = Math.floor(maxHP*((itemsInventory[1].buff)+1)); 



const damageTaken = chalk.bold.redBright;
const hpPoints = chalk.bold.cyanBright;
const success = chalk.greenBright;
const warning = chalk.hex('#FFA500'); 
const userInput = chalk.yellowBright;


const items = [{type: "sword", color: (chalk.rgb(0,0,255)("Blue")), typeBuff: "damange dealt", buff: .1}, {type: "sword", color: (chalk.rgb(255,0,255)("Pink")), typeBuff: "damange dealt", buff: .2},
 {type: "sword", color: (chalk.rgb(255,215,0)("Gold")), typeBuff: "damange dealt", buff: .3}, {type: "armor", color: (chalk.rgb(0,0,255)("Blue")), typeBuff: "health points", buff: .1}, {type: "armor", color: (chalk.rgb(255,0,255)("Pink")), typeBuff: "health points", buff: .2},
 {type: "armor", color: (chalk.rgb(255,215,0)("Gold")), typeBuff: "health points", buff: .3}, {type: "shield", color: (chalk.rgb(0,0,255)("Blue")), typeBuff: "damage recieved", buff: .1}, {type: "shield", color: (chalk.rgb(255,0,255)("Pink")), typeBuff: "damage recieved", buff: .2}, {type: "shield", color: (chalk.rgb(255,215,0)("Gold")), typeBuff: "damage recieved", buff: .3}];
 

const enemies = [
    { type: "skelleton", hp: 50},
    { type: "goblin", hp: 30}, 
    { type: "troll", hp: 20}
];

const name = readline.question("Welcome! By what name shall I call you? ");

//console.log("function " + findAnItem());

console.log(success("Hello, " +(userInput(name))+ " the adventurer!"));
console.log(player())
console.log("You're on a dimly lit coblestone path in a forest.  You have no recollection about how you arrived here, but you feel the urge to find a way out.");

walkStart();

function walkStart(){
    let choices = readline.question( 
             "press "+(chalk.green('w')) +" to walk"
          +"\npress "+(chalk.green('i')) +" to check inventory"
          +"\npress "+(chalk.green('p')) +" to check player status"
          +"\npress "+(chalk.green('q')) +" to quit"  
          +"\nEnter choice: " );
    if (choices == "w"){
        let action = Math.random() * 100 
        //console.log("choices/walkStart: " + action);
        if (action < 51){ //0-50
            walk(); // keep walking (need to list of places that will appear while walking) and then back to walk again
        }else if (action > 80){
            console.log(findAnItem());  // find an item
        }else{
            fight();
        }
    } else if (choices == "i"){
        inventory()
    } else if (choices == "q") {
        if(readline.keyInYN("Your progress will not be saved "+(userInput(name))+ ".  Are you sure you want to quit?")){
            console.log("You have left the adventure")
            process.exit()
        } else {
            walkStart()
        }    
    } else if (choices == "p") { 
       player()
    }else{
        console.log("That is not an option");
        walkStart()
    }
};
    
function findAnItem(){

    let pickedupItem = items[Math.floor(Math.random() * items.length)];
    console.log("You have found an "+(chalk.yellowBright(pickedupItem.color +" "+pickedupItem.type + " with a buff of " +pickedupItem.buff+" to " +pickedupItem.typeBuff ))); 
    console.log("The items in your inventory: "
    +"\n    "+itemsInventory[0].color+" "+ itemsInventory[0].type+" with a "+(chalk.greenBright(itemsInventory[0].buff))+" buff to "+itemsInventory[0].typeBuff
    +"\n    "+itemsInventory[1].color+" "+ itemsInventory[1].type+" with a "+(chalk.greenBright(itemsInventory[1].buff))+" buff to "+itemsInventory[1].typeBuff
    +"\n    "+itemsInventory[2].color+" "+ itemsInventory[2].type+" with a "+(chalk.greenBright(itemsInventory[2].buff))+" buff to "+itemsInventory[2].typeBuff);
     if(readline.keyInYN("Would you like to keep this item?  ")){
       let typeItem = pickedupItem.type
     let newItem = itemsInventory.findIndex(
       (item) => item.type == typeItem)
      if (newItem !== -1){
      itemsInventory[newItem] = pickedupItem;
      }
      // console.log(pickedupItem)
    } 
      
     
      
      //console.log(itemsInventory[newItem])
      
      hp = Math.floor(maxHP*((itemsInventory[1].buff)+1))
    console.log(inventory());  // name prettier
    walkStart();
};
// make this pretty
function inventory() { 
    //console.log((chalk.black.bgYellowBright(itemsInventory[0].type +" " +itemsInventory[1].type +" "+ itemsInventory[2].type)))
    console.log("The items in your inventory: "
    +"\n    "+itemsInventory[0].color+" "+ itemsInventory[0].type+" with a "+(chalk.greenBright(itemsInventory[0].buff))+" buff to "+itemsInventory[0].typeBuff
    +"\n    "+itemsInventory[1].color+" "+ itemsInventory[1].type+" with a "+(chalk.greenBright(itemsInventory[1].buff))+" buff to "+itemsInventory[1].typeBuff
    +"\n    "+itemsInventory[2].color+" "+ itemsInventory[2].type+" with a "+(chalk.greenBright(itemsInventory[2].buff))+" buff to "+itemsInventory[2].typeBuff)
   walkStart()

}
function keyPress(){
    readline.keyInPause();

}
  
function player(){
    console.log("Hello adventurer "+(userInput(name))+ ".  You have "+(chalk.cyanBright(hp))+" health points.")
    console.log(inventory())
    walkStart()
}

 function walk(){
    console.log("You are on the bank of a fast flowing river with a bridge.");
    // console.log("You are on the bank of a fast flowing river with a bridge.");
    // console.log("You are on the bank of a fast flowing river with a bridge.");
    // console.log("You are on the bank of a fast flowing river with a bridge.");
    // console.log("You are on the bank of a fast flowing river with a bridge.");
    walkStart()
 }

function fight(){
     //const winner = selectWinner()
     let activeEnemy = enemySelect()
     enemyHP = activeEnemy["hp"]
     let choices = readline.question( 
        (chalk.redBright("You hear a noise...something is coming"))
                +"\npress "+(damageTaken('f')) +" to fight"
                +"\npress "+(damageTaken('r')) +" to attempt to run away" 
                +"\nEnter choice: " );
        
    if (choices == "f"){
      if (activeEnemy["type:"] == "skelleton"){
        
        let choices = readline.question( 
            (("You have encountered a"+(chalk.redBright(" skelleton"))+" with Health points of "+(chalk.redBright(enemyHP))+". Your Health points are a"+(chalk.cyanBright(hp))+", what do you do?"))
            +"\npress "+(damageTaken('a')) +" to attack"
            +"\npress "+(damageTaken('r')) +" to attempt to run away"  
                    +"\nEnter choice: " );

                    if (choices == "a") {
                         enemyEncounter()
                    } else if (choices == "r"){
                        runAway()
                    }

          }else if (activeEnemy["type:"] == "goblin"){
            
              let choices = readline.question( 
                (("You have encountered a"+(chalk.redBright(" goblin"))+" with Health points of "+(chalk.redBright(enemyHP))+". Your Health points are "+(chalk.cyanBright(hp))+", what do you do?"))
                +"\npress "+(damageTaken('a')) +" to attack"
                +"\npress "+(damageTaken('r')) +" to attempt to run away" 
                        +"\nEnter choice: " );
                        if (choices == "a") {
                            enemyEncounter()
                       } else if (choices == "r"){
                           runAway()
                       }else{
                         "This is not an option, Game OVER!"
                       }
   
          }else{
            
            let choices = readline.question( 
                (("You have encountered a"+(chalk.redBright(" troll"))+" with Health points of "+(chalk.redBright(enemyHP))+". Your Health points are "+(chalk.cyanBright(hp))+", what do you do?"))
                +"\npress "+(damageTaken('a')) +" to attack"
                +"\npress "+(damageTaken('r')) +" to attempt to run away"  
                        +"\nEnter choice: " );
                        if (choices == "a") {
                            enemyEncounter()
                       } else if (choices == "r"){
                           runAway()
                       }
   
          }
        }else if(choices == "r"){
            runAway()  
        }else{
            "This is not an option"
           
         
       
    }
}

function runAway(){
    let action = Math.random() * 100
    //console.log("runAway: " + action);
    if (action < 51){ //0-50
        console.log(chalk.greenBright("You have successfully run away "))
        walk(); 
    }else{
        let damage = (Math.floor(Math.random()*11));
        hp = (hp - damage) 
        console.log("You have failed to run away and recieved "+ (chalk.redBright(damage)) + " damage, you are still in a fight!")
        let choices = readline.question( 
            ("Your life is at "+(chalk.cyanBright(hp))+", what do you do?")
            +"\npress "+(damageTaken('f')) +" to fight"
            +"\npress "+(damageTaken('r')) +" to attempt to run away"  
                    +"\nEnter choice: " );
        
                    if (choices == "f") {
                         enemyEncounter()
                    } else if (choices == "r"){
                        runAway()
                    }
         
    }
}
 
function enemySelect(){
    return enemies[Math.floor(Math.random()*enemies.length)];
    
}

function enemyEncounter(){
   
    //console.log(chalk.redBright("fight fight fight"))         

    console.log(chalk.redBright("Your enemy runs at you with a scary looking weapon"))
while ((hp > 0) && (enemyHP > 0)){
    // attack from enemy
    let attack = Math.floor(Math.random()*11);
    attack = attack-Math.floor(attack*damagerecieved); // attack from enemy
        if (attack > 9){
            attack = Math.floor(attack*1.3)
            console.log("Enemy has critiacally hit you for "+(attack));
        } else if (attack == 0) {
            console.log("You dodged an attack");
        }else{
            console.log("You were hit for " + (damageTaken(attack)) + " health!");
            hp = Math.max(0, (hp - attack))   
        }
  
    // hit from player
    
    let hit = ((Math.floor(Math.random()*11))*damageDeltBuff); // attack from player, needs buff added
    
  
    if (hit == 0) {
        console.log("The enemy dodged your attack");
    } else if (attack > 9){
        hit = Math.floor(hit*1.1);
        console.log("You have critiacally hit enemy for "+(hit));
    } else {
        console.log("You hit the enemy for " + (damageTaken(attack)) + " health!");
        enemyHP = Math.floor(Math.max(0, (enemyHP - attack)))  
    };
    console.log(("Enemies Health points are "+(chalk.redBright(enemyHP))+". Your Health points are "+(chalk.cyanBright(hp))))
    keyPress();
}
if (hp == 0){
    console.log((warning("You cannot say “Not Today” forever."))+(chalk.redBright("\nYou have died, Game OVER!")))
    process.exit()
}
if (enemyHP == 0){
    console.log(warning("'Don't think you've won this. This isn't over yet!'"))
    console.log(success("The enemy has been killed, it has dropped an item!"))
    findAnItem()
}
}

//You are inside a small yet sacrosanct shrine. A sense of deep respectfulness fills this modest room. The way out, into a pine forest, is to the northwest. It is obvious that the shrine was meant to be used for quiet meditation, like similar chambers.

//*kill skeleton

// The viciousness of a whack by the skeleton sends you sideways.
// Dazedly you pull through, and press forward into the contest.
// Your mis-timed return blow at the skeleton is effortlessly shrugged off.
// You easily evade a poor swing from the skeleton.
// You bash the skeleton with a punishing forehand!
// You comfortably shrug off a feeble thump by the skeleton.
// You wallop the skeleton with a crushing whack!
// Your last swing took the life of the skeleton!
// You are victorious - this time...

//You are on the bank of a fast flowing river with pasture to the north and forest to the south.

// walk => 30% chance enemyEncounter => fight/runAway => 
// fight => enemyAttack => kill/bekilled =>
// runAway => 50% change of success and random% loss of life (hit from behind) => walk
// kill => inventory => healling => 10% Bonus to HP for 2 turns => skill points

// stat increases/decreases reduce/increase chance encounters 


// find new item (Sword, Armor, Potion)
// display new item
// ask if want to replace old item with new item in inventory y/n question
// if yes replace item "new item has replaced the (whatever) in your inventory"
// if no do nothing "item was dropped and can no longer be picked up"