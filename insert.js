application.get('/insert', function(req, res){
   var html = ";
   html += "<body>";
   html += "<form action='/process-insert-form' method='post' name='form1'>";
   html += "<label>Book Title</label><input type='text' name='title'/>>";
   html += "<label>Category:</label><input type='text' name='category'/>";
   html += "<label>ISBN:</label><input type='text' name='isbn'/>";
   html += "<input type='submit' value='submit'/>";
   html += "<input type='reset' value='reset'/>";
   html += "</form>";
   html += "</body>";
   ht
   
   res.send(html);
});
