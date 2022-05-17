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
