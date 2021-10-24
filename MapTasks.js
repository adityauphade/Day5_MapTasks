// task 1.a & 1.b Roll a die and find the number between 1 to 6

// function getRandomDice(){
//     var dice_val = Math.floor((Math.random()*6)+1);
//     return dice_val; 
// }

// console.log(`${getRandomDice()}`);

// //task 1.c - Store in a directory
// const dice_data = new Map();
// function getDiceData(count){
//     var index = 1;
//     while(count > 0){
//         var dice_value = getRandomDice();
//         dice_data.set("Throw " + index, dice_value );
//         index++;
//         count--;
//     }
//     console.log(dice_data);
// }

// getDiceData(10);

//task 1.d & 1.e - repeat until any no has a count of 10

//task 2 - find from a group of 50 people having Birthdays in the same month

var BdaeData = new Map();
var index = 1;
function getBdaeData(count){
    while(count > 0){
        var month = Math.floor((Math.random()*12)+1);
        BdaeData.set("Person " + index, month);
        index++;
        count--;
    }
    console.log(BdaeData);
}

getBdaeData(50);
BdaeData.forEach(getIndex);
function getIndex(key, index, map){
    if (key == 1) {
        console.log(index);
    }
}
