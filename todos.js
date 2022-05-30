// Array of tags for todos.
var todo_tags;

// Loads previously saved todos and displays them in the page.
function load_todos() {
   // Used to determine whether the user has already visited the page during this browsing session.
   if (!window.sessionStorage.getItem( "herePreviously" )){
      sessionStorage.setItem( "herePreviously", "true" );
      document.getElementById( "welcomeMessage" ).innerHTML = "Welcome to Todos Application";
   }

   var length = localStorage.length;
   todo_tags = [];

   // load all keys
   for (var index = 0; index < length; ++index){
      todo_tags[index] = localStorage.key(index);
   } 

   todo_tags.sort(); // sort the keys

   var markup = "<ul>"; // used to store search link markup

   // Build list of todos.
   for (var todo in todo_tags){
      markup += "<li><span>" + "Assigned: " + localStorage.getItem(todo_tags[todo]) + "<br/>Task: " + todo_tags[todo] + 
         "</span>" +
         "<input id = '" + todo_tags[todo] + "' type = 'button' " + 
            "value = 'Edit' onclick = 'edit_todo(id)'>" +
         "<input id = '" + todo_tags[todo] + "' type = 'button' " + 
            "value = 'Delete' onclick = 'delete_todo(id)'>";
   }

   markup += "</ul>";
   document.getElementById("todos").innerHTML = markup;
} 

// Deletes all key-value pairs from localStorage.
function clear_all_todos() {
   localStorage.clear();
   load_todos(); 
}

// Saves a newly created todo into localStorage.
function save_todo() {
   var person = document.getElementById("person");
   var tag = document.getElementById("todo");
   localStorage.setItem(tag.value, person.value); 
   tag.value = ""; 
   person.value = ""; 
   load_todos(); 
} 

// Deletes a specific key-value pair from localStorage
function delete_todo(todo) {
   localStorage.removeItem(todo);
   load_todos(); 
} 

// Display existing todo for editing.
function edit_todo(todo){
   document.getElementById("person").value = localStorage[ todo ];
   document.getElementById("todo").value = todo;   
   load_todos(); 
}

// Register event handlers then load todos.
function start(){
   var saveButton = document.getElementById( "saveButton" );
   saveButton.addEventListener( "click", save_todo, false );
   var clearButton = document.getElementById( "clearButton" );
   clearButton.addEventListener( "click", clear_all_todos, false );
   load_todos(); 
} 

window.addEventListener( "load", start, false );
