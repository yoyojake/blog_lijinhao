    var jpg=document.getElementById('picture').getElementsByTagName('img');
    var jpgSrc="picture/face.gif";
    var panimg=0;
    // 点击图片得到图片地址
    for(var i=0;i<jpg.length;i++){
      jpg[0].style.opacity=1;
      jpg[i].style.opacity=0.5;
      jpg[i].onclick=function(){
        for(var j=0;j<jpg.length;j++){
          jpg[j].style.opacity=0.5;
        }
        this.style.opacity=1;
        jpgSrc=this.getAttribute("src");
        panimg=1;
      };
      jpg[i].onmouseover=function(){
        this.style.opacity=1;
      };
      jpg[i].onmouseout=function(){
        if(panimg==0){this.style.opacity=0.5;}
        else {panimg=0;}
      };
    }
    // 输入文字检查和判断
    var number=document.getElementById('number');
    var input=document.getElementById('wrap').getElementsByTagName('input');
    var textarea=document.getElementsByTagName('textarea')[0];
    var ul=document.getElementById('content').getElementsByTagName('ul')[0];
    var oli=ul.getElementsByTagName('li');
    // 选择图片问题
    var imgleft=document.getElementById('left');
    var imgright=document.getElementById('right');
    var imgArray=new Array;
    for(var i=0;i<jpg.length;i++){
      imgArray.push(jpg[i].getAttribute('src'));
    }
    imgleft.onclick=function(){
      let img1=imgArray.shift();
      imgArray.push(img1);
      for(var i=0;i<imgArray.length;i++){
        jpg[i].setAttribute("src",imgArray[i]);
      }
    };
    imgright.onclick=function(){
      let img1=imgArray.pop();
      imgArray.unshift(img1);
      for(var i=0;i<imgArray.length;i++){
        jpg[i].setAttribute("src",imgArray[i]);
      }
    };

    // 输入文字判断字数
    textarea.onkeyup=function(){
      let num=this.value.length;
      if(num<=140){
        number.innerHTML=""+(140-num);
      }else{
        number.innerHTML="-"+(num-140);
      }
    };
    input[1].onmouseover=function(){
      this.style.backgroundColor="green";
      this.style.cursor="pointer";
    };
    input[1].onmouseout=function(){
      this.style.backgroundColor="";
    };

    for(var i=0;i<oli.length;i++){
      oli[i].getElementsByTagName('span')[3].onclick=function(){
        ul.removeChild(this.parentNode.parentNode.parentNode);
      }
      oli[i].onmouseover=function(){
        this.getElementsByTagName('span')[3].style.display="block";
      };
      oli[i].onmouseout=function(){
        this.getElementsByTagName('span')[3].style.display="none";
      };
    }
    // 点击广播后效果
    input[1].onclick=function(){
      var oli=ul.getElementsByTagName('li');
      this.style.backgroundColor="pink";
      let regExp1=/[\.\:\-\/\\\=]+/;
      let pan1=regExp1.test(input[0].value);
      let pan11=input[0].value.length<=6 && input[0].value.length>1;
      let pan2=(textarea.value.length<=140 && textarea.value.length>0);
      if(!pan1 && pan2 && pan11){
          var li=document.createElement('li');
          li.onmouseover=function(){
            this.getElementsByTagName('span')[3].style.display="block";
          };
          li.onmouseout=function(){
            this.getElementsByTagName('span')[3].style.display="none";
          };
          li.setAttribute("class","content");
          li.innerHTML="<img src=\""+jpgSrc+"\">"+"<div>"+
                        "<span><a href=\"#\">"+input[0].value+"</a>：</span>"+
                        "<span>"+textarea.value+"</span>"+
                        "<p><span class=\"date\">"+date()+"</span><span class=\"delete\">删除</span></p>"+
                        "</div>";
          ul.insertBefore(li,oli[0]);
          li.getElementsByTagName('span')[3].onclick=function(){
            ul.removeChild(this.parentNode.parentNode.parentNode);
          }
          if(textarea.value.length>55){
            li.style.height="90px";
          }else if(textarea.value.length>100){
            li.style.height="100px";
          }
          // 清除输入内容
          input[0].value="";
          textarea.value="";
      }else{
        if(pan1){
          alert("username所输入字符不得带有_-./\\等字符！");
        }
        if(!pan11){alert("username字数不在2-6范围内")}
        if(! pan2){
          alert("评价内容字数超了或者少于2个字或者超了");
        }
      }
    };

    function date(){
      var today=new Date();
      var date=""+twoNum(today.getMonth()+1)+"月"+twoNum(today.getDate())+"日"+" "+twoNum(today.getHours())+":"+twoNum(today.getMinutes());
      return date;
    }
    function twoNum(x){
      if(x.toString().length==1){
        return ("0"+x);
      }else{
        return x;
      }
    }
