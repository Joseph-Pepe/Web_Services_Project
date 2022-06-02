// [Packages]: Gets the required packages.
const mysql = require('mysql');
const express = require('express');
const body_parser = require('body-parser');

var urlencodedParser = body_parser.urlencoded({extended: true});
var application = express();
application.use(body_parser.json());

// [Connection]: Need MySQL database connection.
var mysql_connection = mysql.createConnection({
   host: 'localhost',
   user: 'canvas',
   password: 'software',
   database: 'csit437',
   multipleStatement: true
});

// [Check Connection]: Check if MySQL starts up and can be accessed.
mysql_connection.connect((err) => {
   if(!err)
     console.log('Connection Successful.');
   else
     console.log('Connection Failed.');
});

// [Application]: Run the app and listen at port 7000.
const port = 7000;
application.listen(port, () => console.log('listening on port 7000...'));


// [Login Home Page] (root):
application.get('/', (req, res) => {
   // res.sendFile(path, [, options], [, function]): Is used to transfer the files at the given path.
   // The __dirname in a node script returns the path of the folder where the current JavaScript file resides (gets directory name of the currently executing file where './'gives the current working directory).
   res.sendFile(__dirname + '/index.html');
});

// [Register Form]:
application.get('/register-form', (req, res) => {
   res.sendFile(__dirname + '/register-form.html');
});

// [Dashboard]:
application.get('/', (req, res) => {
   res.sendFile(__dirname + '/dashboard.html');
});

// Register account into database:
application.post('/register', urlencodedParser, (req, res) => {
   var username = req.body.username;
   var password = req.body.password;
   
   var bcrypt = require('bcryptjs');
   var salt = bcrypt.genSaltSync(10);
   var hashed_password = bcrypt.hashSync(req.body.password, salt);
   
   mysql_connection.query("insert into accounts (username, password) values ('"+ username + "', '"+ hashed_password + "')", 
      (err, rows, fields) => {
         if(!err)
           res.sendFile(__dirname + '/dashboard.html');
         else 
           console.log(err);
      });
});

// Login to account.
application.post('/login', urlencodedParser, (req, res) => {
   var username = req.body.username;
   var password = req.body.password;
   
   var bcrypt = require('bcryptjs');
   
   mysql_connection.query('select * from accounts where username = ?', [username], 
      (err, rows, fields) => {
         if(!err){
            var passwd = rows[0].password;
            bcrypt.compare(password, passwd, function(err, result){
               if(result)
                 res.sendFile(__dirname + '/dashboard.html');
               else 
                 res.sendFile(__dirname + '/index.html');
            });
         }
         else{ 
           // Ask the user to login again.
           res.sendFile(__dirname + '/index.html');
         }
      });
});

// Insert Todo Form
application.get('/insert', function(req, res){
   var html = "";
   html += "<body>";
   html += "<form action='/process-insert-form' method='post' name='insert_form'>";
   html += "<label>Person Assigned:</label><input type='text' name='person'/>>";
   html += "<label>Task:</label><input type='text' name='todo'/>";
   html += "<input type='submit' value='submit'/>";
   html += "<input type='reset' value='reset'/>";
   html += "</form>";
   html += "</body>";
   res.send(html);
});

application.post('/process-insert-form', urlencodedParser, function(req, res){
   var reply = "";
   reply += "Todo Submitted: " + req.body.todo;
   reply += "<br/>Assigned: " + req.body.person;
   
   mysql_connection.query("insert into todos (person_assigned, todo) values('"+ req.body.person_assigned + "', '"+ req.body.todo + "')", 
      (err, rows, fields) => {
         if(!err)
           res.send(rows);
         else 
           console.log(err);
      });
});
