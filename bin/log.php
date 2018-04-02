<?php
file_put_contents("../logs/log.txt", date('Y-m-d H-i-s; '), FILE_APPEND | LOCK_EX);
file_put_contents("../logs/log.txt", $_POST['choise'], FILE_APPEND | LOCK_EX);
file_put_contents("../logs/log.txt", "\r\n", FILE_APPEND | LOCK_EX);
?>