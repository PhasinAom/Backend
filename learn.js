/* this is commented and //
*/ 

/* variable and datatypes
undefined, null, boolean, string, symbol, number and object

var = fill with anything and there are many other way to declare variables
*/

var myname = "Aom" //  whole program, you can change it
myname = 6
let ourname = "aaaa" // scope of where u declare
const pi = 3.14 // variable that can never change, changing cause error

/* storing variables and assigning varaibles */
/* you can put ; or not at the end of the line */

var a;
var b = 28;

console.log(a);

a = "3";
b = 3;
b--;

console.log(a+b);

var mystr = "this is a \"double quotation\" inside a \"double quotataion\""; // need to use \ to be able to run

var myName = 'aaaaa"sasa"aaaa'; // single quotes allow double quotes

var newName = `aada'aaaa"aaaaa"a'aaaa` //allow both '' and "" in a sentence

console.log(newName);

/* \' single quote
    \" double quotes
    \\ backslash
    \n newline
    \r carriage return
    \t tab
    \b backspace
    \f form feed
    */

var firstName;
var firstNameLenght = "Aom"
//finding lenght of a string
firstName = firstNameLenght.length;
console.log(firstName);

//finding letter of string
var fn;
var ln = "Ploypicha";
fn = ln[1];
console.log(fn);

//find last letter of a string
var a = "abcdefg";
var b = a[a.length-1];// get number of last word
a = b[b.length-1] // get letter of last word
console.log(b)


//array
var bArray = [10,20,30]
bArray[1] = 15; // changing in array is allow
console.log(bArray);
//push function = add array
var myArray = ["a","b","c"];
myArray.push("d","e");
console.log(myArray);
//pop array = remove last array
var xarray = [1,2,3];
xarray.pop();
console.log(xarray);

//shift function = remove first array
//unshift = add element to the beginning

var unarray = [1.1,1.2,1.3]
unarray.unshift(0.1);
console.log(unarray);
unarray.shift()
console.log(unarray);

//FUNCTION

function minusSeven(num){
    return num -= 7
}
function timesFive(num){
    return num *= 5
}

console.log(minusSeven(15));
console.log(timesFive(5));

//array function

function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5]

console.log("before: " + JSON.stringify(testArr));
console.log("remove: " + nextInLine(testArr,6));
console.log("after: " + JSON.stringify(testArr));

//boolean function
function isittrue(yesorno){
    if(yesorno){
        return ("yes its true");
    }
    return ("No its not true");
}

console.log(isittrue(false));

// strict eqaulity 3 === 3 true
//                   '2'=== 2 false 
//                      '2'==2 true
// if val !== 3, this means that if "3" not eqaul to 3 means that is it true


// if else statement
var num;

function checkNum(num) {
    if (num<5){
        return "tiny";
    }
    else if (num<10){
        return "small";
    }
    else if (num<15){
        return "medium";
    }
    else if (num<20){
        return "large";
    }
    else return "huge";
}

console.log("this number is " + checkNum(12));

//golf code

function golfScore(par, stroke){
    if (stroke== 1 ){
        return "hole in one";
    }
    else if (stroke <= par -2){
        return "eagle";
    }
    else if (stroke == par -1){
        return "birdie";
    }
}

console.log(golfScore(5,4));


// switch case

function caseInSwitch(val){
    switch(val){
        case 1: answer = "alpha";
        break;
        case 2: answer = "beta";
        break;
        case 3: answer = "gamma";
        break;
        case 4: answer = "delta";
        break;
    }
    return answer;
}

console.log(caseInSwitch(2));

/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("What's your name? ", name => {
    console.log(`Hello, ${name}!`);
    readline.close();
  });
  console.log('\n');*/
  


  //creating object the properties can be any types of data 

  var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!!"]
  };

  var myCat = {
    "name": "Sonic",
    "Age": 1,
    "tails": 1,
    "friends": []
  };

  var nameValue = myCat.name;
  var ageValue = myCat.Age;

  var testObject = {
    "an entry": "hanburger",
    "my side": "fries",
    "the drinks": "coke"
  };

  var entreeValue = testObject["an entry"];
  var drinksValue = testObject['the drinks'];

  //changing object value
  ourDog.name = "Happy Camper";
  myCat.name = "Dexter";

  //add new properties to an object
  ourDog.bark = "woof";
  myCat['Meow'] = "meoww";

  //deleting properties from an object

  delete ourDog.bark;
  delete myCat.tails;

  //lookup value, instead of using switch statement
  function lookthingup(val) {
    var result = "";
    var lookup = {
        "alpha": "adams",
        "beta": "charlie",
        "delta": "malta"
    }
    result = lookup[val];
    return result;
  };

  console.log(lookthingup("delta"));

  //check value in object

  var object = {
    "gift": "Phone",
    "meal": "Pizza"
};

function checkProperties(result) {
    if (object.hasOwnProperty(result)) {
        return object[result];
    } else {
        return "not found";
    }
}

console.log(checkProperties("meal"));   // Pizza
console.log(checkProperties("mseal"));  // not found


//search name with for loop

var contacts = [
    {
        "firstName": "Kristan",
        "lastName": "Bell",
        "number": "unknown",
        "likes": ["cat, people, birds"]
    },
    {
        "firstName": "Phasin",
        "lastName": "PP",
        "number": "6480567",
        "likes": ["cat, ice cream"]
    },
    {
        "firstName": "broski",
        "lastName": "gg",
        "number": "111111",
        "likes": []
    }
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name || contacts[i].lastName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "no properties";
            }
        }
    }
    return "no name in the data";
};



console.log(lookUpProfile("PP","d"));



// to generate random fraction use Math.random()
// to generate random whole number use Math.floor(Math.random()*20) + 1
// to generate random whole number between 0 and 19 use Math.floor(Math.random()*20)
// to generate random whole number between 1 and 20 use Math.floor(Math.random()*20) + 1
// to generate random whole number between min and max use Math.floor(Math.random() * (max - min + 1)) + min
// to generate random whole number between 1 and 100 use Math.floor(Math.random()*100) + 1
// to generate random whole number between 0 and 100 use Math.floor(Math.random()*101)

var random = Math.random();

console.log(random);

//parseInt function
function convertStringToInt(str){
    return parseInt(str);
}

console.log(convertStringToInt("54"));

//Ternary operator same like if else statement
function checkEqaul(a,b){
    return a === b ? "equal" : "not equal";
}
/* same as 
function checkqeaul(a,b) {
if(a===b){
return true}
else{
 return false;}}
 */

 //ternary nested
function checkEquals(a,b){
    return a === b ? "equal" : a > b ? "greater" : "lesser"; //if a is equal to b return equal, else if a is greater than b return greater else return lesser
}

//var vs let
//var allow rename
//let not allow rename
//const not allow reassign
//let and const are block scope
//var is function scope

//ARROW FUNCTION ***
//ex
/* var myConcat = function(arr1, arr2) {
return arr1.concate(arr2);
}
same as
var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));
*/

//higher order arrow function

const realNumberArray = [1,2,3,4,5,6,7,8,9,10];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
