/**
 * Created by Andy on 2016/12/2.
 */
window.onload=function(){
    var td = document.getElementsByTagName('td');
    var input = document.getElementById('input');

    td[0].onclick=function(){
        input.value = '0';
    };
    td[1].onclick=function(){
        input.value = '-('+input.value+')';
    };
    td[2].onclick=function(){
        input.value = '('+input.value+')'+'/'+100;
    };
    for(var i= 4;i<7;i++){
        td[i].onclick=function(){
            if (input.value !=0){
                input.value += this.innerHTML;
            }else{
                input.value = this.innerHTML;
            }

        }
    }
    for(var i= 8;i<11;i++){
        td[i].onclick=function(){
            if (input.value !=0){
                input.value += this.innerHTML;
            }else{
                input.value = this.innerHTML;
            }
        }
    }
    for(var i= 12;i<15;i++){
        td[i].onclick=function(){
            if (input.value !=0){
                input.value += this.innerHTML;
            }else{
                input.value = this.innerHTML;
            }
        }
    }
    for(var i= 16;i<18;i++){
        td[i].onclick=function(){
            if (input.value !=0){
                input.value += this.innerHTML;
            }else{
                input.value = this.innerHTML;
            }
        }
    }
    td[3].onclick=function(){
        if (input.value != 0){
            input.value += '/';
        }else{
            input.value = '';
        }
    };
    td[7].onclick=function(){
        if (input.value != 0){
            input.value += this.innerHTML;
        }else{
            input.value = '';
        }
    };
    td[11].onclick=function(){
        if (input.value != 0){
            input.value += this.innerHTML;
        }else{
            input.value = '';
        }
    };
    td[15].onclick=function(){
        if (input.value != 0){
            input.value += this.innerHTML;
        }else{
            input.value = '';
        }
    };
    td[18].onclick=function(){
        document.getElementsByTagName('form')[0].submit();
    }
};
