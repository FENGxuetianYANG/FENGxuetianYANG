/*
* @Author: 11
* @Date:   2017-09-18 17:34:18
* @Last Modified by:   11
* @Last Modified time: 2017-09-20 19:50:42
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

	// for(let i=0; i<liss.length; i++){
	// 	liss[i].onmouseover=function(){
	// 		// 他里面的asidezhangkai  this
	// 		let asidezhangkai=this.getElementsByClassName('asidezhangkai');
	// 		asidezhangkai.className='asidezhangkai block';
	// 	}
	// 	liss[i].onmouseout=function(){
	// 		let asidezhangkai=this.getElementsByClassName('asidezhangkai');
	// 		asidezhangkai.className='asidezhangkai';
	// 	}
	// }

// 轮播图
let xiaoyuandian=document.getElementsByClassName('xiaoyuandian')[0];
let liss1=xiaoyuandian.getElementsByTagName('li');
let imgg=document.getElementsByClassName('img')[0];
let imggs=imgg.getElementsByTagName('li');

let bannerLeft=document.getElementsByClassName('banner-lift')[0];
let bannerRight=document.getElementsByClassName('banner-right')[0];


// 自动轮播
// let num=0  图片，按钮的角标
// 和点击换图结合后，选项卡最后赋值给num，num=i
	let banner=document.getElementsByClassName('banner')[0];
	let t=setInterval(forward, 2500);
	let num=0;
	for(let i=0; i<liss1.length; i++){
		liss1[i].onclick=function(){
			for(let j=0; j<imggs.length; j++){
				animate(imggs[j],{opacity:0});
				liss1[j].style.background='#a2a2a2';
			}
			animate(imggs[i],{opacity:1});
			liss1[i].style.background='white';
			num=i;
		}
		
	}

	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(forward, 2500);
	}
	bannerRight.onclick=function(){
		forward();
	}
	bannerLeft.onclick=function(){
		forwardfu();
	}

	function forward(){
		num++;
		if(num==imggs.length){
			num=0;
		}
		for(let i=0; i<imggs.length; i++){
			liss1[i].style.background='#a2a2a2';
			animate(imggs[i],{opacity:0});
		}
		animate(imggs[num],{opacity:1});
		liss1[num].style.background='white';
	}

	function forwardfu(){
		num--;
		if(num<0){
			num=imggs.length-1;	
		}
		for(let i=0; i<imggs.length; i++){
			liss1[i].style.background='#a2a2a2';
			animate(imggs[i],{opacity:0});
		}
		animate(imggs[num],{opacity:1});
		liss1[num].style.background='white';
	}
	
	
