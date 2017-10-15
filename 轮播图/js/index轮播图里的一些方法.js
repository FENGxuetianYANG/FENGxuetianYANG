/*
* @Author: 11
* @Date:   2017-09-18 17:34:18
* @Last Modified by:   11
* @Last Modified time: 2017-09-20 11:44:27
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

let bannerLift=document.getElementsByClassName('bannerLift')[0];
let bannerRight=document.getElementsByClassName('banneRight')[0];

// 方法1:
// 	for(let i=0; i<liss1.length; i++){
// // 先把所有的都消失掉，然后对应的出现
// 		liss1[i].onmouseover=function(){
// 			for(let j=0; j<imggs.length; j++){
// 				imggs[j].style.display='none';	
// 			}
// 			imggs[i].style.display='block';
// 		}
		
// 	}

// // 方法2:
// 	let now=0;
// 	for(let i=0; i<liss1.length; i++){
// 		liss1[i].onmouseover=function(){
// // 把现在就存在的消失，把通过事件出现的显现，然后把新出现的赋值给现在的，
// 让他循环起来
// 			imggs[now].style.display='none';
// 			imggs[i].style.display='block';
// 			now=i;
// 		}
// 	}

// // 方法3：
// // 由于var声明变量时会造成你不管怎么输入变量的值，都只会显示最后执行循环的值
// // 所以为了解决这一状况，我们将一个方法（或属性）放入对象中，所以我们调用属性
// // 或方法来实现每一个变量所对应的值。(！let声明没有这一状况)
// 	var now=0;
// 	for(var i=0; i<liss1.length; i++){
// 		liss1[i].index=i;
// 		liss1[i].onmouseover=function(){
// 			imggs[now].style.display='none';
// 			imggs[this.index].style.display='block';
// 			now=this.index;
// 		}
// 	} 

// // 方法4：闭包函数的方式
// 	// var now=0;
// 	// for(var i=0; i<liss1.length; i++){
// 	// 	liss1[i].index=i;
// 	// 	liss1[i].onmouseover=(function(i){
// 	// 		return function(){
// 	// 			imggs[now].style.display='none';
// 	// 			imggs[i].style.display='block';
// 	// 			now=i;
// 	// 		}
// 	// 	})(i)
// // ()(i)自调用函数
// 	}
// 自动轮播
// let num=0  图片，按钮的角标
// 和点击换图结合后，选项卡最后赋值给num，num=i
	let banner=document.getElementsByClassName('banner')[0];
	let t=setInterval(forward, 2500);
	let num=0;

	for(let i=0; i<liss1.length; i++){
		liss1[i].onclick=function(){
			for(let j=0; j<imggs.length; j++){
				imggs[j].style.display='none';
				liss1[j].style.background='#a2a2a2';
			}
			imggs[i].style.display='block';
			liss1[i].style.background='white';
			num=i;
		}
		
	}

	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		setInterval(forward, 2500);
	}


	bannerRight.onclick=function(){
		forward()
	}
	bannerLeft.onclick=function(){
		forwardfu()
	}

	function forward(){
		num++;
		if(num==imggs.lengs){
			num=0;
		}
		for(let i=0; i<imggs.length; i++){
			liss1[i].style.background='#a2a2a2';
			imggs[i].style.display='none';
		}
		imggs[num].style.display='block';
		liss1[num].style.background='white';
	}

	function forwardfu(){
		num--;
		if(num==0){
			num=imggs.lengs-1;
		}
		for(let i=0; i<imggs.length; i++){
			liss1[i].style.background='#a2a2a2';
			imggs[i].style.display='none';
		}
		imggs[num].style.display='block';
		liss1[num].style.background='white';
	}
	
	
