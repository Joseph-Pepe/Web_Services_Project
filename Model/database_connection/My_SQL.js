const mysql = require('mysql');
const express = require('express');
const body_parser = require('body-parser');

var application = express();
application.use(body_parser.json());

var mysql_connection = mysql.createConnection({
   host: 'localhost',
   user: 'username',
   password: 'password',
   database: 'database_name',
   multipleStatement: true
});

mysql_connection.connect((error) => {
   if(!error)
     console.log('Connection Successful.');
   else
     console.log('Connection Failed.');
});

const port_number = 7000;
application.listen(port_number, () => console.log('listening on port 7000'));
