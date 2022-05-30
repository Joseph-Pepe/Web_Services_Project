// Array of tags for todos.
var todo_tags;

// Loads previously saved todos and displays them in the page.
function load_todos(){
   // Used to determine whether the user has already visited the page during this browsing session.
   if(!sessionStorage.getItem("herePreviously")){
      // Used to display welcome message.
      sessionStorage.setItem("herePreviously", "true");
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
      markup += "<li><span>" + todo_tags[tag] + "</span>" 
             + "<input id = '" + todo_tags[tag] + "' type = 'button' " + "value = 'edit' onclick = 'edit_todo(id)'>"
             + "<input id = '" + todo_tags[tag] + "' type = 'button' " + "value = 'delete' onclick = 'delete_todo(id)'>";
   }
   
   var markup += "</ul>";
   document.getElementById("todos").innerHTML = markup;
}

// Deletes all key/value pairs from localStorage.
function clear_all_todos(){
   localStorage.clear();
   load_todos();
}

// Saves a newly created todo into localStorage.
function save_todo(){
   var todo = document.getElementById("todo");
   localStorage.setItem(todo.value);
   todo.value = "";
   load_todos();
}

// Deletes a specific key/value pair from localStorage.
function delete_todo(todo){
   localStorage.removeItem(todo);
   load_todos();
}

function edit_todo(todo){
   document.getElementById("todo").value = todo;
   load_todos();
}

function start(){
   // Register event handlers then load todos.
   var save_button = document.getElementById("save_button");
   save_button.addEventListener("click", save_todo, false);
   var clear_button = document.getElementById("clear_button");
   clear_button.addEventListener("click", clear_all_todos, false);
   load_todos();
}

window.addEventListener("load", start, false);
