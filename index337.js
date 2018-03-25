/*
* @Author: 11
* @Date:   2017-09-23 00:21:10
* @Last Modified by:   11
* @Last Modified time: 2017-09-23 10:39:16
*/

window.onload=function(){
	let danpingtu=document.querySelector('.xiaomimingxingdanpingtu');
	let kongbaiquyu2Left=document.querySelector('.kongbaiquyu2-left');
	let kongbaiquyu2Right=document.querySelector('.kongbaiquyu2-right');
	let danpingtuLI=document.querySelector('.xiaomimingxingdanpingtu>li');
	let w=(danpingtuLI.offsetWidth+parseInt(getComputedStyle(danpingtuLI,null).marginRight))*5;
	console.log(w)
	let i=0;

	kongbaiquyu2Left.onclick=function(){
		if(i==2){
			return;
		}
		i++;
		danpingtu.style.transform=`translateX(-${i*w}px)`;
	}
	kongbaiquyu2Right.onclick=function(){
		if(i==0){
			return;
		}
		i--;
		danpingtu.style.transform=`translateX(-${i*w}px)`;
	}





}