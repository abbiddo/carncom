var time="",today = new Date();
var h5=document.getElementsByTagName('h5');

function timer(){
	today = new Date();
	time="";
	time+= ('0'+today.getHours()).slice(-2);
	time+= ':';
	time+= ('0'+today.getMinutes()).slice(-2);
	setTimeout(m,100);
}

function m(){ 
	h5[0].innerHTML=time;
	timer();
}

today = new Date();
time="";
time+= ('0'+today.getHours()).slice(-2);
time+= ':';
time+= ('0'+today.getMinutes()).slice(-2);
setTimeout(m,0);