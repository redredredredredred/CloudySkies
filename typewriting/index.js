/*
  效果来自npm官网的 提示文字模拟效果
  借此demo 提供实现思路
*/

/*
  在页面dom加载完毕以后，提供onload调用
*/
var simulation = function() {
    var e = document.querySelector("#what-npm-is-for");
    if (e) {
  
        var strt = ["browsers","io.js","mobile","angular","react","jquery","nodebots","gulp","browserify","grunt","cordova","docpad","tessel"];
        var length = strt.length;

        pause(e,strt,length);
    }
}

/*
  简单的内容的dom操作
*/
var malarkey  = function(element,innerHtml){
    element.innerHTML = innerHtml;
}

/*
  打字效果实现，
  future ：优化打字效果的 实现函数化控制
*/
var pause = function(element,str,arrlength,nedelete){
    var self = element,charstr = "",index = 0,arrlength = arrlength-1;
    var strt = str[arrlength].split('');
    var length = strt.length;

    var timer = setInterval(function(){

            charstr += strt[index];
            malarkey(self,charstr);
            index ++;
            if(index == length){
                clearInterval(timer);
                if(arrlength > 0){
                    chardelete(element,str,arrlength);
                }
            }
            console.log("pause "+"["+str[arrlength]+"]"+index);
    },100);

}


/*
  删字效果实现，
  future ：优化删字效果的 实现函数化控制
*/
var chardelete = function(element,str,arrlength){
    var self = element,charstr = "",index = 0;
    var innerHtml = self.innerHTML;
    var length = innerHtml.length;
    setTimeout(function(){
        var timer = setInterval(function(){
                    if(length <= 0){
                        clearInterval(timer);
                        pause(element,str,arrlength);
                    }
                    console.log("delete "+"["+innerHtml+"]"+length);
                    malarkey(self,innerHtml.substring(0,length--));                    
            },60);
    },(Math.random()*1000+50).toFixed());
    
}



