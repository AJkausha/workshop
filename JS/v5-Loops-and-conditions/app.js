// MY TODO list - PROPERTY
//START OBJECT todos
//START OBJECT todos
let todos  = {
  list : [

   

    {
      text: "Learn  HTML5",
      completed: true
    },

    {
      text: "Learn CSS",
      completed: true
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
    console.log(this.list.length);
    if (this.list.length == 0) {
      console.log("You dont have  any todos,  add some!");
    }

    this.list.forEach (function(item) {
      let completedStr =(item.completed) ? "(X)" : "( )";
      console.log (completedStr, item.text);
  
 });
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
  this.displaytoDos()
},

temp : function () {
  // console.log("Hello World !");
}
}//END OBJECT todos


todos.displaytoDos()















