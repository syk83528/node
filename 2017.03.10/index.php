<?php
//    echo file_get_contents('info.json');

    //只取一个数据
    $str = file_get_contents('info.json');
    //字符串转数组
    $strObj = json_decode($str);
    //取随机值
    $index = array_rand($strObj,1);
    $obj = $strObj[$index];
    //返回一个值,数组转字符串
    echo json_encode($obj);
?>