var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "cammello",
  password: "Cammello13"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});