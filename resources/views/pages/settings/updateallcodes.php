<?php 

include_once("functions.php");

//Get files path
//$path = "codes/";
//$files = scandir($path);

$allcodes = ["fwef","wefwe","ffff"]; // to wczytać z bazy
echo "A";
foreach ($allcodes as $value) {
    updateCode();
}
echo "Z";
// foreach($files as $file) {
//     $file = pathinfo($file);
//     var_dump($file);
//     include('updatecode.php');
// }


?>