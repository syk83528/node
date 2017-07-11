<?php 
	// $_FILES['']
	// sleep(3);
	print_r($_FILES);
	$upfile = $_FILES['upfile'];
	$fileName = $upfile['name'];
	$filePath = $upfile['tmp_name'];

	echo '<br>'.$fileName.'<br>'.$filePath;
	//保存文件	
	move_uploaded_file($filePath,'123.png');
 ?>

