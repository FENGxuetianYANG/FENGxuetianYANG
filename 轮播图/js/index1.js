/*
* @Author: 11
* @Date:   2017-09-18 17:34:18
* @Last Modified by:   11
* @Last Modified time: 2017-09-20 18:49:59
*/
let asidedaohang=document.getElementsByClassName('asidedaohang');
let liss=asidedaohang[0].getElementsByTagName('li');
let asidezhangkai=document.getElementsByClassName('asidezhangkai');

for(let i=0; i<liss.length; i++){
	liss[i].onmouseover=function(){
		asidezhangkai[i].style.display='block';
	}
	liss[i].onmouseout=function(){
		asidezhangkai[i].style.display='none';
	}
}

// 轮播图
let xiaoyuandian=document.getElementsByClassName('xiaoyuandian')[0];
let liss1=xiaoyuandian.getElementsByTagName('li');
let imgg=document.getElementsByClassName('img')[0];
let imggs=imgg.getElementsByTagName('li');

let bannerLift=document.getElementsByClassName('banner-lift')[0];
let bannerRight=document.getElementsByClassName('banner-right')[0];
// next,now指下标
let now=0;
let next=0;
// 设置变量flag，防止出现连续点击按钮造成动画无法完成的状况，也就是
// 必选完成动画效果后才能再次点击。
let flag=true;


// 思路：
// now(0 0)———(-imggsW 0);
// next(imggsW 0)———(0 0);
// now=next;
let imggsW=	parseInt((getComputedStyle(imgg ,null).width));
let banner= document.getElementsByClassName('banner')[0];
let t=setInterval(move,2500);

banner.onmouseover=function(){
	clearInterval(t);
}

banner.onmouseout=function(){
	t=setInterval(move,2500);
}


bannerRight.onclick=function(){
	if(!flag){
		return;
	}
	move();
	flag=false;
}

bannerLift.onclick=function(){
	if(!flag){
		return;
	}
	movel();
	flag=false;
}



function move(){
	next++;
	if(next==imggs.length){
		next=0;
	}
	liss1[next].style.background='white';
	liss1[now].style.background='#a2a2a2';

	imggs[next].style.left=imggsW+'px';
	// animate动画js设定的函数
	animate(imggs[now],{left:-imggsW});
	// function(){flag=true;}回调函数，用来检测出动画效果是否完成，
	// 完成则继续执行bannerLift.onclick=function(){}内容。
	animate(imggs[next],{left:0},function(){
		flag=true;
	});
	now=next;
}

function movel(){
	next--;
	if(next<0){
		next=imggs.length-1;
	}
	liss1[next].style.background='white';
	liss1[now].style.background='#a2a2a2';
	imggs[next].style.left=`${-imggsW}px`;
	animate(imggs[now],{left:imggsW});
	animate(imggs[next],{left:0},function(){
		flag=true;
	});
	now=next;
}

for(let i=0; i<liss1.length; i++){
	liss1[i].onclick=function(){
		if(now==i){return}
		liss1[i].style.background='white';
		liss1[now].style.background='#a2a2a2';
		imggs[i].style.left=`${imggsW}px`;
		animate(imggs[now],{left:-imggsW});
		animate(imggs[i],{left:0})
		now=i;
		next=i;

	}
}
