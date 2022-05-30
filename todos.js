// Array of tags for todos.
var todo_tags;

// Loads previously saved todos and displays them in the page.
function load_todos(){
   if(!sessionStorage.getItem("herePreviously")){
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
