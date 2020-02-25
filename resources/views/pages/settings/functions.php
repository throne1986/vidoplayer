<?php

    // function updateCode($codeid) {
    function updateCode($coderow) {

     //   echo $codeid .",";
        $autoplay = "true"; // to oczytujemyt z bazy
       // $codeid = $codeid;
        
        $templatefile = file_get_contents("code.jstemplate");
        $replacedfile = str_replace("[autoplay]", $autoplay, $templatefile);
        $replacedfile = str_replace("[codeid]", $codeid, $replacedfile);
        file_put_contents("codes/" .$codeid .".js", $replacedfile );

    }

?>