/*
* @Author: 11
* @Date:   2017-09-15 17:13:08
* @Last Modified by:   11
* @Last Modified time: 2017-09-15 18:16:19
*/
	let tijiao=document.getElementById('tijiao');
	let mima=document.getElementById('mima');
	let YHname=document.getElementById('YHname');

	tijiao.onclick=function(){
		if(mima.value=='12345' && YHname.value=='zhangsan'){
			alert('success')
		}else{
			location.replace('index2.html');
		}
	}