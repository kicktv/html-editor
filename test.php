<?php
$link = file_get_contents('http://www.mediafire.com/file/z0k7tchc7gts07m/drive.mp4');
$start = strpos($link, 'http://download');
$end = strpos($link, '"',$start);
$link = substr($link, $start,$end - $start);
echo $link;
?>
