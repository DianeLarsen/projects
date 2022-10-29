const readline = require("readline-sync");
const chalk = require('chalk');
let itemsInventory = [
    {type: "sword",color: "White", typeBuff: "damange dealt", buff: 1.1}, // gives buff to hits
    {type: "armor", color: "White", typeBuff: "health points",buff: 1.3}, // gives buff to health
    {type: "shield", color: "White", typeBuff: "damage recieved", buff: 1.2} // reduces hits from enemies
];
const maxHP = 100;
let debuff = 1;

let hp = (maxHP*itemsInventory[1].buff*debuff); // maxHP*buff


const damageTaken = chalk.bold.redBright;
const hpPoints = chalk.bold.cyanBright;
const success = chalk.greenBright;
const warning = chalk.hex('#FFA500'); 
const userInput = chalk.yellowBright;

const items = [{type: "sword", color: "Red", typeBuff: "damange dealt", buff: 0}, {type: "sword", color: "Pink", typeBuff: "damange dealt", buff: 0}, {type: "sword", color: "Gold", typeBuff: "damange dealt", buff: 0}, {type: "armor", color: "Red", typeBuff: "health points", buff: 0}, {type: "armor", color: "Pink", typeBuff: "health points", buff: 0}, {type: "armor", color: "Gold", typeBuff: "health points", buff: 0},
 {type: "shield", color: "Red", typeBuff: "damage recieved", buff: 0}, {type: "shield", color: "Pink", typeBuff: "damage recieved", buff: 0}, {type: "shield", color: "Gold", typeBuff: "damage recieved", buff: 0}];
 let pickedupItem = items[Math.floor(Math.random() * items.length)];
const enemies = [
    { type: "skelleton", hp: 50},
    { type: "goblin", hp: 30}, 
    { type: "troll", hp: 20}
];

const name = readline.question("Welcome! By what name shall I call you? ");

console.log("function " + findAnItem());

console.log(success("Hello, " +(userInput(name))+ " the adventurer!"));
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
        console.log("Hello adventurer "+(userInput(name))+ ".  You have "+(chalk.cyanBright(hp))+" health points.  Your inventory includes the following items:"+(chalk.black.bgYellowBright(itemsInventory[0].type+" " + itemsInventory[1].type+" " + itemsInventory[2].type)))
        walkStart()
    }else{
        console.log("That is not an option");
        walkStart()
    }
};
    
function findAnItem(){
    
    console.log("You have found an "+(chalk.yellowBright(pickedupItem.color +" "+pickedupItem.type + " with a buff of " +pickedupItem.buff+" to " +pickedupItem.typeBuff ))); 
    
       let typeItem = pickedupItem.type
     let newItem = itemsInventory.findIndex(
       (item) => item.type == typeItem)

        
       //console.log("item to replace: " + typeItem)
      //console.log("Index of item to replace: " + newItem)
    
      
            
      

      if (newItem !== -1)
      itemsInventory[newItem] = pickedupItem;
      
      console.log(pickedupItem)
      
      
      
      //console.log(itemsInventory[newItem])
      
    
    console.log(inventory());  // name prettier
    walkStart();
};
// make this pretty
function inventory() { 
    console.log((chalk.black.bgYellowBright(itemsInventory[0].type +" " +itemsInventory[1].type +" "+ itemsInventory[2].type)))
    console.log(itemsInventory)
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
   
     let choices = readline.question( 
        (chalk.redBright("You hear a noise...something is coming"))
                +"\npress "+(damageTaken('f')) +" to fight"
                +"\npress "+(damageTaken('r')) +" to attempt to run away" 
                +"\nEnter choice: " );
        
    if (choices == "f"){
      if (activeEnemy["type:"] == "skelleton"){
        
        let choices = readline.question( 
            (("You have encountered a"+(chalk.redBright(" skelleton"))+", what do you do?"))
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
                (("You have encountered a"+(chalk.redBright(" goblin"))+", what do you do?"))
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
                (("You have encountered a"+(chalk.redBright(" troll"))+", what do you do?"))
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
            "This is not an option, Game OVER!"
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
    let attack = (Math.floor(Math.random()*11)); // attack from enemy
    let hit = (Math.floor(Math.random()*11)); // attack from player, needs buff added
    if (attack == 0) {
        console.log("You dodged a hit");
    } else {
        
        console.log("You were hit for " + (damageTaken(attack)) + " health!");
     hp = Math.max(0, (hp - attack))   
        
    }
  

if (hp == 0){
    console.log("You have died, Game OVER!")
    process.exit()

}else if (hp < 21){
    console.log(warning("Your life is low you may want to run"))
}

let choices = readline.question (
    ("Your life is at "+(chalk.cyanBright(hp))+" health points, what do you do?")
            +"\npress "+(damageTaken('a')) +" to attack"
            +"\npress "+(damageTaken('r')) +" to attempt to run away" 
            +"\nEnter choice: " );

            if (choices == "a") {
                 enemyEncounter()
            } else if (choices == "r"){
                runAway()
            }else{
                "This is not an option, Game OVER!"
                enemyEncounter()
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