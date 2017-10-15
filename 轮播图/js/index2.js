/*
* @Author: 11
* @Date:   2017-09-23 10:40:58
* @Last Modified by:   11
* @Last Modified time: 2017-09-23 11:44:16
*/
window.onload=function(){
	let danpingtu=document.querySelector('.danpingtu');
	let tittleLeft=document.querySelector('.tittle-left');
	let tittleRight=document.querySelector('.tittle-right');
	let danpingtuLI=document.querySelector('.danpingtu>li');
	let w=(danpingtuLI.offsetWidth+parseInt(getComputedStyle(danpingtuLI,null).marginRight))*5;
	console.log(w)
	let i=0;

	tittleLeft.onclick=function(){
		if(i==2){
			return;
		}
		i++;
		danpingtu.style.transform=`translateX(-${i*w}px)`;
	}
	tittleRight.onclick=function(){
		if(i==0){
			return;
		}
		i--;
		danpingtu.style.transform=`translateX(-${i*w}px)`;
	}



}