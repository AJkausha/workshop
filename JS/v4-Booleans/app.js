// MY TODO list - PROPERTY
//START OBJECT todos
let todos  = {
  list : [

    ["learn HTML", false],

    {
      text: "Learn  HTML5",
      completed: false
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
      completed: false
    },
  ],

 

  // DISPLAY TODOS - METHOD
  displaytoDos: function() {
   console.log(this.list);

 },

 //ADD TODO
 addTodo: function(todoText) {
  let newTodo = {
    text : todoText,
    completed : false
  }

  this.list.push(newTodo);
  this.displaytoDos();
},

//CHANGE TODO
changeTodo : function (index,newText) {
  this.list[index].text = newText;
  this.displaytoDos();
},

// DELETE TODO
deleteTodo: function (index) {
  this.list.splice(index, 1);
  this.displaytoDos();
},

//TOGGLE COMPLETED
toggleTodo: function (index) {
  let currentStatus = this.list[index].completed;
  this.list[index].completed = ! currentStatus;
  this.displaytoDos();
},

temp : function () {
  console.log("Hello World !");
}//END OBJECT todos


}
console.log(todos.list);
// todos.temp();
// todos.addTodo("I am a good girl!");
// todos.changeTodo(1, "I love this world");

// todos.deleteTodo(0);
// todos.toggleTodo(2)
// todos.toggleTodo(2)
console.log(todos);
console.log(todos.list);
console.log(todos.list[1]);
console.log(todos.list[1].text);
todos.list[2].completed = true;
console.log(todos.list[2].completed)













