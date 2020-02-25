<?php
	$autoplay = "true"; // to oczytujemyt z bazy
	$codeid = $_GET['codeid'];
	
	$templatefile = file_get_contents("code.jstemplate");

	$replacedfile = str_replace("[autoplay]", $autoplay, $templatefile);
	$replacedfile = str_replace("[codeid]", $codeid, $replacedfile);
	file_put_contents("codes/" .$codeid .".js", $replacedfile );

//	header("Location: /getupdated.php?codeid=" .$codeid );

// wysl;anie kodu na s3 i ustawienie s3 jako źródła dla cloudfronta

?>