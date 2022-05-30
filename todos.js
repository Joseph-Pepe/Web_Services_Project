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

// Saves a newly created todo into localStorage.
function save_todo() {
   var person_assigned = document.getElementById("person_assigned");
   var todo = document.getElementById("todo");
   localStorage.setItem(todo.value, person_assigned.value); 
   todo.value = ""; 
   person_assigned.value = ""; 
   load_todos();
} 

// deletes a specific key-value pair from localStorage
function delete_todo(todo) {
   localStorage.removeItem(todo);
   load_todos(); 
}

// Display existing todo for editing.
function editTag(todo){
   document.getElementById("person_assigned").value = localStorage[ todo ];
   document.getElementById("todo").value = todo;   
   load_todos();
} 

// Register event handlers then load todos
function start(){
   var save_button = document.getElementById("save_button");
   save_button.addEventListener("click", save_todos, false);
   var clear_button = document.getElementById("clear_button");
   clear_button.addEventListener("click", clear_all_todos, false);
   load_todos();
} 


// Array of tags for todos.
var todo_tags;

// Loads previously saved todos and displays them in the page.
function load_todos() {
   if (!window.sessionStorage.getItem( "herePreviously" )){
      sessionStorage.setItem( "herePreviously", "true" );
      document.getElementById( "welcomeMessage" ).innerHTML = 
         "Welcome to the Favorite Twitter Searches App";
   } // end if

   var length = localStorage.length; // number of key-value pairs
   tags = []; // create empty array

   // load all keys
   for (var i = 0; i < length; ++i) 
   {
      tags[i] = localStorage.key(i);
   } // end for

   tags.sort(); // sort the keys

   var markup = "<ul>"; // used to store search link markup
   var url = "http://search.twitter.com/search?q=";

   // build list of links
   for (var tag in tags) 
   {
      var query = url + localStorage.getItem(tags[tag]);
      markup += "<li><span><a href = '" + query + "'>" + tags[tag] + 
         "</a></span>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Edit' onclick = 'editTag(id)'>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Delete' onclick = 'deleteTag(id)'>";
   } // end for

   markup += "</ul>";
   document.getElementById("searches").innerHTML = markup;
} // end function loadSearches

// deletes all key-value pairs from localStorage
function clearAllSearches() 
{
   localStorage.clear();
   loadSearches(); // reload searches
} // end function clearAllSearches

// saves a newly tagged search into localStorage
function saveSearch() 
{
   var query = document.getElementById("query");
   var tag = document.getElementById("tag");
   localStorage.setItem(tag.value, query.value); 
   tag.value = ""; // clear tag input
   query.value = ""; // clear query input
   loadSearches(); // reload searches
} // end function saveSearch

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
