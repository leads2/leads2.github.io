<?php
// Enter your Host, username, password, database below.
// I left password empty because i do not set password on localhost.
$con = mysqli_connect("eu-cdbr-west-02.cleardb.net:3306","befa7dfea41859","bd06c2aa","heroku_5761656d599b4cc");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>
