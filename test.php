<?php
$link = file_get_contents('https://www.mediafire.com/file/z0k7tchc7gts07m/drive.mp4');
$start = strpos($link, 'https://download');
$end = strpos($link, '"',$start);
$link = substr($link, $start,$end - $start);
echo $link;
?>
