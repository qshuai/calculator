<?php
/**
 * Created by PhpStorm.
 * User: Andy
 * Date: 2016/12/2
 * Time: 18:01
 */
class calculator{
    private $str;
    public $result;

    function __construct($str){
        //初始化赋值
        $this->str = $str;
    }

    //输出结果
    public function result(){
        $string = $this->str = preg_replace('/×/','*',$this->str);
        @eval("\$this->result=$this->str;");
        if(!$this->result){
            $this->result = '请检查输入';
        }
        $data = array($this->result,$string);
        return $data;
    }

}