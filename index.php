<?php
/**
 * Created by PhpStorm.
 * User: Andy
 * Date: 2016/12/2
 * Time: 13:52
 */
    //调用calculator.class.php，得到运行结果并展示
    if($_POST['userInput']){
        require 'calculator.class.php';
        $calculator = new calculator($_POST['userInput']);
        $data = $calculator->result();
    }

    //引入html主文件
    require 'calculator.html';



