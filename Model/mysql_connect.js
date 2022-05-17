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
   user: 'username',
   password: 'password',
   database: 'database_name',
   multipleStatement: true
});

// [Check Connection]: Check if MySQL started and can be accessed.
mysql_connection.connect((error) => {
   if(!error)
     console.log('Connection Successful.');
   else
     console.log('Connection Failed.');
});

// [Application]: Run the app and listen at port 7000.
const port = 7000;
application.listen(port, () => console.log('listening on port 7000...'));


// Login Home Page:
application.get('/', (req, res) =>
   // res.sendFile(path, [, options], [, function]): Is used to transfer the files at the given path.
   // The __dirname in a node script returns the path of the folder where the current JavaScript file resides (gets directory name of the currently executing file where './'gives the current working directory).
   res.sendFile(__dirname + '/login.html');
});

// Register Form:
application.get('/register-form', (req, res) =>
   res.sendFile(__dirname + '/register-form.html');
});


// Register to database:
application.post('/register', urlencodedParser, (req, res) => {
   var username = req.body.username;
   var password = req.body.password;
   var first_name = req.body.first_name;
   var last_name = req.body.last_name;
   
   var bcrypt = require('bcrypt.js');
   var salt = bcrypt.genSaltSync(10);
   var hashed_password = bcrypt.hashSync(req.body.password, salt);
   
   mysql_connection.query("insert into administrators (username, password, firstName, lastName) values ('"+ username + "', '"+ hashed_password + "',  '"+ first_name + "', '"+ last_name + "')", 
      (error, rows, fields) => {
         if(!error)
           res.send(`Welcome {$username} to join us`);
         else 
           console.log(error);
      });
});

application.post('/login', urlencodedParser, (req, res) => {
   var username = req.body.username;
   var password = req.body.password;
   var first_name = req.body.first_name;
   var last_name = req.body.last_name;
   
   var bcrypt = require('bcrypt.js');
   
   mysql_connection.query('select * from administrators where username = ?', [username], 
      (error, rows, fields) => {
         if(!error){
            var passwd = rows[0].password;
            bcrypt.compare(password, passwd, function(error, result){
               if(result)
                 res.send(`${first_name} ${last_name}, welcome to our site!`);
               else 
                 res.sendFile(__dirname + '/login.html');
            });
         }
         else{ 
           // Ask the user to login again.
           res.sendFile(__dirname + '/login.html');
         }
      });
});
