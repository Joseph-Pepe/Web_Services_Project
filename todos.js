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
      tags[index] = localStorage.key(index); 
   }
}
