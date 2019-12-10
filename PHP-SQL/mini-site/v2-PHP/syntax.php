<?php 

//Number
$bob = 3;

//String
$bob = "bob is great";

//Array
$bob = [1,2,3];

//Booleans
$bob = true;
$bob = false;

//Functions
function bob($birthYear) {

  $age = 2019 - $birthYear;
  return "Bob is " . $age;
}

//  echo bob(1992);
?>

<h1> <?php echo bob(2041); ?> </h1>