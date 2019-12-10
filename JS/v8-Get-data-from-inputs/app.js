//START OBJECT todos
let todos = {

  //MY TODO LIST - PROPERTY
  list: [

    {
      text: "Learn HTML5",
      completed: true
    },
    {
      text: "Learn CSS",
      completed: false
    },
    {
      text: "Learn JS",
      completed: false
    },
    {
      text: "Learn PHP",
      completed: true
    }

  ],

  //DISPLAY TODOS - METHOD
  displayTodos: function () {

    if (this.list.length == 0) {
      console.log("You don't have any todos, add some!");
    }

    this.list.forEach(function (item) {
      let completedStr = (item.completed) ? "(x)" : "( )";
      console.log(completedStr, item.text);
    });
    console.log("-------------------")
  },




  //ADD TODO
  addTodo: function (todoText) {

    let newTodo = {
      text: todoText,
      completed: false
    }

    this.list.push(newTodo);
    this.displayTodos();
  },

  //CHANGE TODO
  changeTodo: function (index, newText) {
    this.list[index].text = newText;
    this.displayTodos();
  },

  //DELETE TODO
  deleteTodo: function (index) {
    this.list.splice(index, 1);
    this.displayTodos();
  },

  //TOGGLE COMPLETED
  toggleTodo: function (index) {

    let currentStatus = this.list[index].completed; //true or false
    this.list[index].completed = !currentStatus;
    this.displayTodos();

  },

  //TOGGLE ALL !
  toggleAll: function () {

    //Completed items INIT
    let completedItems = 0;

    //How many todos I have ?
    let totalTodos = this.list.length; //console.log("Total todos:", totalTodos);

    //1. Check what items are completed (true)
    this.list.forEach(function (item) {
      if (item.completed == true) {
        completedItems++; //or... completedItems += 1;
      }
    });
    // console.log("Completed items:", completedItems);

    //2. IF nothing is completed => check them all 
    // OR IF we have completed items => check them all
    //Version 1
    // if(completedItems == 0 || (completedItems > 0 && completedItems != totalTodos)) {
    //   console.log("Check them all !");
    // }
    // else {
    //   console.log("Uncheck them all !");
    // }

    //Version 2
    // if(completedItems >= 0 && completedItems != totalTodos) {
    //   console.log("Check them all !");
    // }
    // else {
    //   console.log("Uncheck them all !");
    // }

    //Version 3
    if (completedItems == totalTodos) {
      this.list.forEach(function (item) {
        item.completed = false;
      });
    }
    else {
      this.list.forEach(function (item) {
        item.completed = true;
      });
    }

    this.displayTodos();

  }


}; // END OBJECT todos


// START OBJECT handlers

let handlers = {

  //HANDLER ADD FOR ADDING TODO

  //Check if an input is empty. Alert if so
  
  isEmpty: function (input) {

    if (input.value === '') {
      alert("The input ''" + input.id + "'' cannot be empty!");
      return true;
    }
    else {
      return false;
    }

  },

  // ADD TODO
  //Handler for ADD todo
  addTodo: function () {
    const inputAdd = document.getElementById('inputAdd');

    if (!this.isEmpty(inputAdd)) {
      todos.addTodo(inputAdd.value);
      inputAdd.value = '';
    }
  },

  // TOGGLE TODO
  //Handler for toggle 
  toggleTodo: function () {
    const inputToggleIndex = document.getElementById('inputToggleIndex');

    if (!this.isEmpty(inputToggleIndex)) {
      todos.toggleTodo(inputToggleIndex.value);
      inputToggleIndex.value = '';
    }
  },

  // DELETE TODO
  //Handler for Delete
  deleteTodo: function () {
    const inputDeleteIndex = document.getElementById('inputDeleteIndex');

    if (this.isEmpty(inputDeleteIndex)) {
      todos.deleteTodo(inputDeleteIndex.value);
      inputDeleteIndex.value = '';
    }
  },

  // CHANGE TODO 
  //Handler for change
  changeTodo: function () {
    const inputChangeIndex = document.getElementById('inputChangeIndex');
    const inputChangeText = document.getElementById('inputChangeText');

    if (!this.isEmpty (inputChangeIndex)  && ! this.isEmpty(inputChangeText)) {
      todos.changeTodo(inputChangeIndex.value, inputChangeText.value);
      inputChangeText.value = inputChangeText.value = '';
    }
  },
};







  // addTodo: function () {
  //   const inputAdd = document.getElementById('inputAdd');

  //   if (inputAdd.value != '') {
  //     todos.addTodo(inputAdd.value);
  //     inputAdd.value = '';
  //   }
  //   else {
  //     alert("Already Added..")
  //   }
  // },
  //HANDLER TOGGLE 
  // toggleTodo: function () {
  //   const inputToggleIndex = document.getElementById('inputToggleIndex');
  //   if (inputToggleIndex.value != '') {
  //     todos.toggleTodo(inputToggleIndex.value);
  //     inputToggleIndex.value = '';
  //   }
  //   else {
  //     alert("Already Added..")
  //   }
  // },
  //HANDLER DELETE
  // deleteTodo: function () {
  //   const inputDeleteIndex = document.getElementById('inputDeleteIndex');
  //   if (inputDeleteIndex.value != '') {
  //     todos.deleteTodo(inputDeleteIndex.value);
  //     inputDeleteIndex.value = '';
  //   }
  //   else {
  //     alert("Already deleted..")
  //   }
  // },

  //HANDLER CHANGE
  //   changeTodo: function () {
  //     const inputChangeIndex = document.getElementById('inputChangeIndex');
  //     const inputChangeText = document.getElementById('inputChangeText');
  //     if (inputChangeIndex.value !== '' && inputChangeText.value !== '') {
  //       todos.changeTodo(inputChangeIndex.value, inputChangeText.value);
  //       inputChangeText.value = '';
  //     }

  //     else {
  //       alert("Already Changed..")
  //     }
  //   },








//LINK
// const btnDisplay = document.getElementById('btnDisplay');
// const btnToggleAll = document.getElementById('btnToggleAll');


// // Display Todos btn
// btnDisplay.addEventListener('dblclick', function() {
//   // todos.displayTodos();

//   // console.log("Just clicked the button !");
//   // alert("Button Clicked");
//   // prompt("Button Clicked");
//   // confirm("Button Clicked");
// });

// // Toggle Todos btn
// btnToggleAll.addEventListener('click', function() {
//   // todos.toggleAll();
// });

// ADD Todos btn and input
// const btnAdd = document.getElementById('btnAdd');

// btnAdd.addEventListener('click', function() {
//   const inputAdd = document.getElementById('inputAdd');
//   if (inputAdd.value != '') {
//   todos.addTodo(inputAdd.value);
//   inputAdd.value = '';
// }
// else {
//   alert("Already Added..")
// }
// });

// CHANGE TODOS 
// const btnChange = document.getElementById('btnChange');
// const inputChangeIndex = document.getElementById('inputChangeIndex');
// const inputChangeText = document.getElementById('inputChangeText');

// btnChange.addEventListener('click', function () {
//   todos.changeTodo(inputChangeIndex);
//   todos.changeTodo(inputChangeText.newText);
// });


// TOGGLE TODOS
// const btnToggle = document.getElementById('btnToggle');


// btnToggle.addEventListener('click', function () {
//   const inputToggleIndex = document.getElementById('inputToggleIndex');
//   if (inputToggleIndex.value != '') {
//     todos.toggleTodo(inputToggleIndex.value);
//     inputToggleIndex.value = '';
//   }
//   else {
//     alert("Index cannot be empty--")
//   }
// });

// WHAT WE'VE MISSED
//1. One strict comparision
// // let num = 3;
// if (num == 3) {
//   console.log (true);
// }
// else {
//   console.log (false);
// }

// let bool = 1;
// if (bool === true) {
//   console.log ("true");
// }
// else {
//   console.log (false);
// }

// //2. You can write conditions like this
// if(true) console.log ("true");
// else console.log (false);