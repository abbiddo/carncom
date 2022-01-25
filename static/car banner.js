var set,i,n;
var str={
	0:"최고의 기술력으로",
	1:"고객님의 안전을 최우선 하겠습니다"
};
var colorlist="1234567890abcdef";
var color="#";
var h3=document.getElementsByTagName('h3');

function reset(){
	h3[0].innerHTML="ㅤ";
	h3[1].innerHTML="ㅤ";
	setTimeout(text1,1500);
}

function text1(){
	color="#";
	for (i=0;i<6;i++){
		n=Math.floor(Math.random()*20);
		if (n<16) color+=colorlist[n];
		else i--;
	}
	h3[0].style.color=color;
	h3[0].innerHTML=str[0];
	setTimeout(text2,1500);
}

function text2(){
	color="#";
	for (i=0;i<6;i++){
		n=Math.floor(Math.random()*20);
		if (n<16) color+=colorlist[n];
		else i--;
	}
	h3[1].style.color=color;
	h3[1].innerHTML=str[1];
	setTimeout(reset,1500);
}

setTimeout(text1,1500);