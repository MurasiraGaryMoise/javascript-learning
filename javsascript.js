// console.log("Hello World");
// let 
// var 
// const
//defference btm them
//js is dynamic 
//c or java static 
// string are immutable or not java string   , why 
// what is declaration and initialisation
// function name(params) {
  
// }
// what is parameters and arrugments
//  return  statement  why we need it

                      //variables
// var myName="Gary";
// var myAge=19;
// console.log("hi, My name is " + myName + " and I am " + myAge + " years old");


// let changeMe = true;
// changeMe= false;
// console.log(changeMe);

// const entree = "Enchiladas";
// console.log(entree);
// //mathematical operators
// let levelUp=5;
// let powerLevel=500;
// let multiplyMe=23;
// levelUp+=5;
// powerLevel-=100;
// multiplyMe*=11;
// let quarterMe= 44;
// quarterMe/=4;


//String concatenation with variables
// let favoriteAnimal='dog';
// console.log('My favorite animal: '+ favoriteAnimal);
// //string interpolation
// let myName= 'Murasira';
// let mycity = 'Kigali';
// console.log(`My name is ${myName}. My favorite city is ${mycity}.`)
// //typeof operator
// let newVariable = 'Playing around with typeof.';
// console.log(typeof newVariable);
// newVariable=1;
// console.log(typeof newVariable);


                       //conditional statements
// if (true){
//   console.log('this message will print!');
// }

// let sale = true;
// sale = false;
// if (sale){
//   console.log('Time to buy');
// } else {
//   console.log('Time to wait for a sale.')
// }

// let hungerLevel = 7;
// if (hungerLevel>7){
//   console.log('Time to eat!');
// } else{
//   console.log('We can eat later!');
// }

 //logical operators (&&,||,!)
// let mood = 'sleepy';
// let tirednessLevel=6;
// if (mood ==='sleepy' && tirednessLevel>8) { // you can change the operator to || 
//   console.log('time to sleep');
// } else {
//   console.log('not bed time yet');
// }
     //short way to use if else statement
// let tool = 'marker';
// // Use short circuit evaluation to assign  writingUtensil variable below:
// let writingUtensil = tool || 'pen'

// console.log(`The ${writingUtensil} is mightier than the sword.`);

////unsing ternary operator to simplify if and else statement
 ////normal way
// let isNightTime = true; //test 0 or 'false'  
// if (isNightTime){
//   console.log('Turn on the lights!');
// } else {
//   console.log('Turn on the lights!');
// }
 ////simplified way
// isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// let isLocked = false;

// if (isLocked) {
//   console.log('You will need a key to open the door.');
// } else {
//   console.log('You will not need a key to open the door.');
// }//or 
// isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

// let isCorrect = true;

// if (isCorrect) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }//or
//isCorrect ? console.log('Correct!') : console.log('Incorrect!');

// let favoritePhrase = 'Love That!';

// favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

    //using else if statement
// let season = 'summer';

// if (season === 'spring') {
//   console.log('It\'s spring! The trees are budding!');
//  }
//   else if (season === 'winter'){
//    console.log("It's winter! Everything is covered in snow.");
//   }
//     else if (season === 'fall'){
//       console.log("It's fall! Leaves are falling")
//    }
//       else if(season === 'summer'){
//           console.log("It's sunny and warm because it's summer!");
//       }
//         else {
//             console.log('Invalid season.');
//     }

       //using switch statement

// let athleteFinalPosition = 'first place';
// switch (athleteFinalPosition) {

//   case 'first place' :
//     console.log('You get the gold medal!');
//   break;

//   case 'second place' :
//     console.log('You get the silver medal!');
//   break;

//   case 'third place' :
//     console.log('You get the bronze medal!');
//   break;

//   default:
//     console.log('No medal awarded.');
//   break;
// }


                      //functions
// //function declaration
// function getReminder(){
//     console.log('Water the plants.')
// }

// function greetInSpanish() {
//     console.log('Buenas tardes.')
// }


// //function calling
// function sayThanks(){
//     console.log('Thank you for your purchase! We appreciate your business');
// }
// sayThanks();
// sayThanks();
// sayThanks();

// //parameters and Arguments
// function sayThanks(name){// parameter called 'name'
//     console.log('Thank you for your purchase ' + name +'! We appreciate your business.');
// }
// sayThanks('Cole');//arguments as variables 
// sayThanks('pedro');
// sayThanks('ben');

// function calculateArea( length , width ){
//     Area= length * width;
//     console.log(`The area of rectangle is ${Area} cm(squared) `)
// }
// calculateArea(30,6);


// //default parameters
// function greeting (name = 'stranger') { // "stranger" is assigned to name as a default in case no argument is passed.
//   console.log(`Hello, ${name}!`)
// }

// greeting('Nick') // Output: Hello, Nick!
// greeting() // Output: Hello, stranger!

// function makeShoppingList(item1 = 'milk',item2 = 'bread',item3 = 'eggs'){
//   console.log(`Remember to buy ${item1}`);
//   console.log(`Remember to buy ${item2}`);
//   console.log(`Remember to buy ${item3}`);    
// }
// makeShoppingList();

  //callback functions
// function monitorCount(rows,columns){
//     return rows * columns;
// }
// function costOfMonitors(rows,columns){
//     return monitorCount(rows,columns) * 200;
// }

// const numOfMonitors=monitorCount(5,4);
// const totalCost = costOfMonitors(5,4)
// console.log(numOfMonitors);
// console.log(totalCost);

// //function expression
// const plantNeedsWater = function(day){ //this is an expression
//     if(day === 'Wednesday'){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(plantNeedsWater('Tuesday'));


// //Arrow Funtions
// const rectangleArea = (width, height) => { // the => replace the need to write keyword 'funtion'
//   let area = width * height;
//   return area;
// };
// console.log(rectangleArea(2,4));

// const plantNeedsWater = (day) => { //using => rather than 'function' keyword
//     if(day === 'Wednesday'){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(plantNeedsWater('Tuesday'));

  //Concise Body arrow Functions
// const plantNeedsWater = (day) => { 
//     //     if(day === 'Wednesday'){
// //         return true;
// //     }
// //     else {
// //         return false;
// //     }
// day === 'Wednesday' ?  true :  false;
// }
// console.log(plantNeedsWater('Tuesday'));

// const plantNeedsWater = day => day === 'Wednesday' ? true : false ;

// const calculateArea = function (width,Height) {
//     const area = width * Height;
//     return area;
// }

                        //SCOPE
// const city = "New York City"
// const logCitySkyline = () => {
//     let skyscraper = 'Empire State Building'
//     return `The stars over the ${skyscraper} in ${city}`;
// }
// console.log(logCitySkyline()) // see that the variable city can be accessed inside the function
// console.log(skyscraper) // an error message will appear because skyscraper is declared inside a function and cannot be accessed outside.

 //Global scope
 //  //declaring globle variables
// let satellite = 'The Moon';
// let galaxy = ' The Milky Way';
// let stars = 'North Star';
 
// const callMyNightSky = () => `Nigtht Sky: ${satellite}, ${stars}, and ${galaxy}`
// console.log(callMyNightSky());

// const callMyNightSky = function(){
//     return `Nigtht Sky: ${satellite}, ${stars}, and ${galaxy}`
// }
// console.log(callMyNightSky())

 //Block scope (variable declared inside a block is accessed only inside the block)
// const logVisibleLightWaves = () => {
//     const lightWaves = 'MoonLight';
//     console.log(lightWaves);
// }
// logVisibleLightWaves();
// console.log(lightWaves);// an erro should appear.

  //scope pollution
// const logVisibleLightWaves = () => {
//   let lightWaves = 'Moonlight';
// 	let region = 'The Arctic';
//   // Add if statement here:
//   if (region === 'The Arctic' ){
//     let lightWaves = 'Northern Lights'
//     console.log(lightWaves)
//   }
//   console.log(lightWaves);
// };

// logVisibleLightWaves();

                    // Arrays
//   //creating arrays
// let concepts = ['creating arrays', 'array structures', 'array manipulation'];
// console.log(concepts);

// const hobbies = ['play' , 'read' , 'movies'];
// console.log(hobbies);

//   // Accessing elements
// const hello = 'Hello World';
// console.log(hello[6]);// Output: W

// const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
// let listItem = famousSayings[0];
// console.log(listItem) // the first element is the output
// console.log(famousSayings[2]);// the third element is the output
// console.log(famousSayings[3]) // output: undefined

//   //updating elements
// let groceryList = ['bread', 'tomatoes', 'milk'];
// groceryList[1]= 'avocados'; // second element is changed to avocados
// console.log(groceryList)

// const hobbies = ['play' , 'read' , 'movies'];
// hobbies[0] = 'dance'; // changes first element 'play' to 'dance'
// console.log(hobbies);

//  //Arrays with let and const
// let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
// const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
// condiments[0] = 'Mayo'
// console.log(condiments);
// condiments = ['Mayo'] // re-assigning elements in array condiments
// console.log(condiments);
// utensils[3] = 'Spoon';
// console.log(utensils)
// //utensils = ['plate']; // a type error
// //console.log('utensils') // error

//   //the length property
// const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
// console.log(objectives.length) //counts the number of elements found in the array.

//     //adding and removing elements in an array
////adding
// const chores = ['wash dishes', 'do laundry', 'take out trash'];
// chores.push('mopping','cleaning');// adds elements in the array
// console.log(chores);

// //removing
// const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
// chores.pop();// removes the last item
// console.log(chores);

// //removing first element
// const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// groceryList.shift();// removes the first element.
// console.log(groceryList)

// //adding an element on the first position
// const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// groceryList.unshift('popcorn');
// console.log(groceryList);

// // getting elements from a range using slice()
// const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// groceryList.shift();
// groceryList.unshift('popcorn');
// console.log(groceryList.slice(2,5)); // outputs items btn indexes 2 and 5
// console.log(groceryList); //here you will see that the original array is back. slice() doesnt change the elements in an array

// // using .indexOf() in finding a specific element
// const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// groceryList.shift();
// groceryList.unshift('popcorn');
// const pastaIndex = groceryList.indexOf('pasta');// returns the index corresponding to pasta which is 4
// console.log(pastaIndex);
// console.log(groceryList.indexOf('bread')) // no bread in the array so the ouput will be -1



    //ARRAYS AND FUNCTIONS
// const flowers = ['peony', 'daffodil' , 'marigold'];
// const addFlower = arr => arr.push('lily');
// addFlower(flowers);
// console.log(flowers);// Output: ['peony', 'daffodil', 'marigold', 'lily']

// const concept = ['arrays', 'can', 'be', 'mutated'];
// const changeArr = arr => arr[3]='MUTATED';
// changeArr(concept);
// console.log(concept);
// const removeElement = newArr => newArr.pop();
// removeElement(concept);
// console.log(concept);



   //Nested arrays
