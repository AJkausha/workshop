// // CONDTIONS : WHAT TO DO DPENDING ON THE WEATHER
// // let weather = "snowing"; // sunny, rainy, cloudy, snowing

// // if(weather=="sunny") {
// //   console.log("Take your sun glasses..!");
// // }

// // else if(weather=="rainy") {
// //   console.log("Take your umbrella..!");
// // }

// // else if(weather=="cloudy") {
// //   console.log("Take your Jacket..!");
// // }

// // else if(weather=="snowing") {
// //   console.log("Take your sledge..!");
// // }

// // else {
// //   console.log("dont know yet...");
// // }


// // Age Conditions

// // function calculateAge (birthYear) {
// //   let currentYear = new Date().getFullYear();
// //   let age = currentYear - birthYear;
// //   let msg = "";

// //   if(age < 6) {
// //     msg = "Drink your milk";
// //   }

// //   else if (age >= 6 && age < 18) {
// //     msg= "Go to sleep, you have school tomorrow..!";
// //   }
// //   else if(age >= 18 && age < 40) {
// //     msg = "Work hard, you can do it..!";
// //   }
// //   else if(age >= 40 && age <= 65) {
// //     msg = "You won 1 million dollars..!";
// //   }
// //   else if (age>65) {
// //     msg = "Take your pills..!";
// //   }

// //   else {
// //     msg = "Lets drink..!";
// //   }

// //   return "You have " + age + " : " + msg; // You have 53: Lets Party!
// // }

// // // console.log(calculateAge(2000));
// // // console.log(calculateAge(1930));
// // // console.log(calculateAge(1992));
// // // console.log(calculateAge(2016));
// // // console.log(calculateAge(2008));














// // COMPARAISON OPERATORS
// /*

// == // => equality (Comparision)
// === // => strict equality
// ||  //OR
// && //And
// > - greater than
// >= - greater than equal
// < - Less than
// <= - Less than equal

// */



// // //  LOOPS----------------------------
// // let num = 100;
// // for(let i = 1; i <= num; i++) {
// //   console.log(i);
// // }

// // For Loop
//   // let names = ["Kausha", "Hersalam", "Ermin", "Natu", "Zia", "Mohemad", "Ahemad"];
//   // // console.log(names.length)

//   //FOR LOOP WITH ARRAY LENTH
//   // for(let i = 0; i < names.length; i++) {
//   //   // console.log(names[i]);
//   // }

//   // // FOREACH LOOP - WITH A ANNONYMOUS FUNCTION
//   // names.forEach(function(item, index) {
//   //   console.log(item, index);
//   //   // console.log(index);
//   // } );
  
//   // // FOREACH  LOOP - WITH A CUSTOM FUNCTION
//   // function iterateNames(item) {
//   //   console.log(items)
//   // }
     
//   // //  call the custom function  on each loop
//   //  names.forEach(iterateNames)

//   // Excersise : loop inside an array containing object

//   let myTodos = [ {
//       text : "Item 1",
//       completed : true
    
//     },
//     {
//       text : "Item 2",
//       completed : true
//     },
//     {
//       text : "Item 3",
//       completed : true
//     },
//     {
//       text : "Item 4",
//       completed : false
//     }
//   ];
 
//   //USE FOR TO DISPLAY THE TODOS TEXTS
//   for(let i = 0; i < myTodos.length; i++) {
//     // console.log(myTodos[i].text);
//   }
//   //USE "ForEach" FOR TO DISPLAY THE TODOS TEXTS
//   myTodos.forEach(function(item) {
//     // console.log(item.text)
//   });

//   //check the status of completed key- classic approch
//   myTodos.forEach (function(item){
//     let completedStr = "( )";
//     if (item.completed) {
//       completedStr = "(X)";
//     }

//     //check the status of completed key - TENARY OPERATOR
//     let completedStr2 =(item.completed) ? "(X)" : "( )";

//   //   console.log (completedStr2, item.text)
//   // });