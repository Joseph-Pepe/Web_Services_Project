// Array of tags for todos.
var todo_tags;

// Loads previously saved todos and displays them in the page.
function load_todos(){
   // Used to determine whether the user has already visited the page during this browsing session.
   if(!sessionStorage.getItem("herePreviously")){
      // Used to display welcome message.
      sessionStorage.setItem("herePreviously", true);
      document.getElementById("welcomeMessage").innerHTML = "Welcome to Todos Application";
   }
   
   var length = localStorage.length;
   todo_tags = [];
  
   // Load all keys:
   for(var index = 0; index < length; ++index){
      todo_tags[index] = localStorage.key(index); 
   }
   
   todo_tags.sort();
   
   var markup = "<ul>";
   
   for(var tag in todo_tags){
      var todo = localStorage.getItem(todo_tags[tag]);
      markup += "<li><span>" + todo_tags[tag] + "</li></span>" 
             + "<input id = '" + todo_tags[tag] + "' type = 'button' " + "value = 'edit' onclick = 'editTodo(id)'>"
             + "<input id = '" + todo_tags[tag] + "' type = 'button' " + "value = 'delete' onclick = 'deleteTodo(id)'>";
   }
   
   var markup += "</ul>";
   document.getElementById("todos").innerHTML = markup;
}

// Deletes all key/value pairs from localStorage.
function clear_all_todos(){
   localStorage.clear();
   loadTodos();
}

// Saves a newly created todo into localStorage.
function save_todo(){
   var todo = document.getElementById("todo");
   localStorage.setItem(todo.value);
   todo.value = "";
   loadTodos();
}
