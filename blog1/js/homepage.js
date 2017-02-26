var wrap2=document.getElementById('wrap1').childNodes;
var wrap1=document.getElementById('wrap1');
var wrap33=wrap1.getElementsByTagName('div');
var kuan=0;
var input=document.getElementById('input');
var wrap3=new Array;
var allNH=new Array;
var contenTitle=new Array;
for(var i=0;i<wrap33.length;i++){                       // 找出所有的class为wrap3
	    if (wrap33[i].className==="wrap3") {
	    	wrap3.push(wrap33[i]);
	    }
	    if (wrap33[i].className==="bottom") {
	    	allNH.push(wrap33[i]);
	    }
    }
var wrap_p=wrap1.getElementsByTagName('p');             // 找出需要隐藏的元素
for(var i=0;i<wrap_p.length;i++){
	if (wrap_p[i].className==="bottomLink") {
		allNH.push(wrap_p[i]);
	}
}
allNH.push(document.getElementById('bottomNext'));
allNH.push(document.getElementById('boxFlex').getElementsByTagName('h1')[0]);
allNH.push(document.getElementById('bottom'));

var head_bc=document.getElementById('headWrap1');         //头部背景设置

window.onresize=nice;
function nice(){
	kuan=document.body.offsetWidth;
	input.value=kuan;
	if (kuan<768&&kuan>480) {
		wrap1.style.width="100%";
		head_bc.style.backgroundColor="silver";
		head_bc.style.height="40px";
		for(var i=0;i<allNH.length;i++){
			allNH[i].style.display="none";
		}
		for(var j=0;j<wrap3.length;j+=2){
			wrap3[j].style.borderRight="1px solid silver";
		}
		for(var j=0;j<wrap3.length;j++){
			wrap3[j].style.borderTop="1px solid silver";
		}
		wrap3[wrap3.length-1].style.borderBottom="1px solid silver";
		wrap3[wrap3.length-2].style.borderBottom="1px solid silver";
		for(var i=0;i<wrap2.length;i++){
	    if (wrap2[i].className==="wrap2") {
           wrap2[i].style.width="50%";
           wrap2[i].style.float="left";

	    }
    }
	}

	if (kuan>768) {
		wrap1.style.width="";
		head_bc.style.backgroundColor="";
		head_bc.style.height="";
		for(var i=0;i<allNH.length;i++){
			allNH[i].style.display="";
		}
		for(var j=0;j<wrap3.length;j+=2){
			wrap3[j].style.borderRight="";
		}
		for(var j=0;j<wrap3.length;j++){
			wrap3[j].style.borderTop="";
		}
		wrap3[wrap3.length-1].style.borderBottom="";
		wrap3[wrap3.length-2].style.borderBottom="";
		for(var i=0;i<wrap2.length;i++){
	    if (wrap2[i].className==="wrap2") {
           wrap2[i].style.width="";
           wrap2[i].style.float="";
	    }
	    }
    }
}
