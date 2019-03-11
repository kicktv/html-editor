<?php  $url = $_GET['src'];
$html = file_get_contents($url);
echo $html;
?>
