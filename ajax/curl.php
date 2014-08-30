<?php 
$name = $_POST['name'];
$background_image = $_POST['background_image'];
$profile_image = $_POST['profile_image'];
$genre = $_POST['genre'];

//Lo primerito, creamos una variable iniciando curl, pasándole la url
$ch = curl_init('http://54.200.77.121/artist');
//especificamos el POST (tambien podemos hacer peticiones enviando datos por GET
curl_setopt ($ch, CURLOPT_POST, 1);
$senddata = array("name" => $name,"background_image" => $background_image,"profile_image" => $profile_image,"genre" => $genre); 
//le decimos qué paramáetros enviamos (pares nombre/valor, también acepta un array)
curl_setopt ($ch, CURLOPT_POSTFIELDS, $senddata);
//le decimos que queremos recoger una respuesta (si no esperas respuesta, ponlo a false)
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
//recogemos la respuesta
$respuesta = curl_exec ($ch);
//o el error, por si falla
$error = curl_error($ch);
//y finalmente cerramos curl
curl_close ($ch);
$response = new stdClass();
$response->respuesta = $respuesta;
$response->error = $error;
$response->sendData = $senddata;
echo json_encode($response);
?>