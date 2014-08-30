<?php 
require_once '../includes/db.php';

$name = $_POST['name'];
$background_image = $_POST['background_image'];
$profile_image = $_POST['profile_image'];
$genre = $_POST['genre'];

$response = new stdClass();
$query="INSERT INTO prueba(id,back,profile,genre,name)  VALUES ('','$background_image', '$profile_image', '$genre','$genre')";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$response->affect = $mysqli->affected_rows;
$response->back = $background_image;
$response->name = $name;
$response->profile = $profile_image;
$response->genre = $genre;

echo $json_response = json_encode($response);

?>