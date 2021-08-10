// task 1.a & 1.b Roll a die and find the number between 1 to 6

function getRandomDice(){
    var dice_val = Math.floor((Math.random()*6)+1);
    return dice_val; 
}

console.log(`${getRandomDice()}`);

//task 1.c - Store in a directory
const dice_data = new Map();
function getDiceData(count){
    var index = 1;
    while(count > 0){
        var dice_value = getRandomDice();
        dice_data.set(index, dice_value );
        index++;
        count--;
    }
    console.log(dice_data);
}

getDiceData(10);
