<?php
/**
 * Created by IntelliJ IDEA.
 * User: syk
 * Date: 17/4/20
 * Time: 下午2:36
 */
//    echo $_POST['age'];
    header('content-type:text/xml; charset= utf-8');
    echo file_get_contents('../ajax.xml');
?>