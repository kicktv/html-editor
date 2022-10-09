<?php
//code php show display codes php in color by highlight_file or show_source
ob_start();
highlight_file('Proxy.php');
//show_source('show.php');
$code = ob_get_contents();
ob_end_clean();
echo $code; 
?> 
