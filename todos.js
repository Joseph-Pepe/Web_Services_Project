
// Saves a newly created todo into localStorage.
function save_todo(){
   var person_assigned = document.getElementById("person_assigned");
   var todo = document.getElementById("todo");
   localStorage.setItem(todo.value, person_assigned.value);
   todo.value = "";
   person_assigned.value = "";
   load_todos();
}

// Deletes a specific key/value pair from localStorage.
function delete_todo(todo){
   localStorage.removeItem(todo);
   load_todos();
}

function edit_todo(todo){
   document.getElementById("person_assigned").value = localStorage[todo];
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

   // Load all keys.
   for (var index = 0; index < length; ++index) {
      todo_tags[index] = localStorage.key(index);
   } 

   todo_tags.sort(); // sort the keys

   var markup = "<ul>"; 

   // Build list of todos.
   for (var todo in todo_tags){
      var person_assigned = localStorage.getItem(todo_tags[todo]);
      markup += "<li><span>" + person_assigned + ": " + todo_tags[todo] + 
         "</span>" +
         "<input id = '" + todo_tags[todo] + "' type = 'button' " + 
            "value = 'Edit' onclick = 'edit_todo(id)'>" +
         "<input id = '" + todo_tags[todo] + "' type = 'button' " + 
            "value = 'Delete' onclick = 'delete_todo(id)'>";
   }

   markup += "</ul>";
   document.getElementById("todos").innerHTML = markup;
}

// Deletes all key-value pairs from localStorage
function clear_all_todos(){
   localStorage.clear();
   load_todos(); 
} 

function save_todo() {
   var person_assigned = document.getElementById("person_assigned");
   var todo = document.getElementById("todo");
   localStorage.setItem(todo.value, person_assigned.value); 
   todo.value = ""; 
   person_assigned.value = ""; 
   loadtodos();
} 

// deletes a specific key-value pair from localStorage
function deleteTag( tag ) 
{
   localStorage.removeItem( tag );
   loadSearches(); // reload searches
} // end function deleteTag

// display existing tagged query for editing
function editTag( tag )
{
   document.getElementById("query").value = localStorage[ tag ];
   document.getElementById("tag").value = tag;   
   loadSearches(); // reload searches
} // end function editTag

// register event handlers then load searches
function start()
{
   var saveButton = document.getElementById( "saveButton" );
   saveButton.addEventListener( "click", saveSearch, false );
   var clearButton = document.getElementById( "clearButton" );
   clearButton.addEventListener( "click", clearAllSearches, false );
   loadSearches(); // load the previously saved searches
} // end function start

window.addEventListener( "load", start, false );
