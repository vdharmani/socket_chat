<?php

include 'FileBuckup.php';




Zip('C:/xampp/htdocs/php_backup', './compressednew33.zip');


//$zip_name=str_replace('./','',$destination);


$zip_name="compressednew33.zip";
downld($zip_name);
?>