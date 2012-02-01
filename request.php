<?php
	header('Content-type: application/json');
	error_reporting(0);

	if(isset($_GET['url']))
	{
		$url = $_GET['url'];

		$json = file_get_contents("http://gdata.youtube.com/feeds/api/videos/".$url."/related?v=2&alt=jsonc");
		
		if ($json) 
		{
			echo $json;
		} 
		else 
		{
			echo "Sorry mates. It didn't work.";
		}
	}

?>
