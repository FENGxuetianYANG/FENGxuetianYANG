window.onload=function(){
	let table=document.querySelector('tbody');
	// 单元格td》保存td到变量》 td清空》 创建input并把变量的值给了input》
	// 更新后  input new重新给td 清除input；
// 查找
	let student=[
		{name:'张三',xb:'男',jg:'山西太原',phong:'1234567',nowzhuzhi:'太原市小店区学府街10号'},
		{name:'张三',xb:'男',jg:'山西太原',phong:'1234567',nowzhuzhi:'太原市小店区学府街10号'},
		{name:'张三',xb:'男',jg:'山西太原',phong:'1234567',nowzhuzhi:'太原市小店区学府街10号'},
		{name:'张三',xb:'男',jg:'山西太原',phong:'1234567',nowzhuzhi:'太原市小店区学府街10号'},
		{name:'张三',xb:'男',jg:'山西太原',phong:'1234567',nowzhuzhi:'太原市小店区学府街10号'},
	]

	student.forEach(element=>{
		zhixing(element);
	});

		function zhixing(ojb){
		let trtr=document.createElement('tr');
		trtr.innerHTML=`
				<td>${ojb.name}</td>
				<td>${ojb.xb}</td>
				<td>${ojb.jg}</td>
				<td>${ojb.phong}</td>
				<td>${ojb.nowzhuzhi}</td>
				<td><button class="shanchu">删除</button></td>
		`
		table.appendChild(trtr);
	}

// 修改和删除
	// td事件委派给table
	table.addEventListener('dblclick',fn);
	function fn(e){
		// element是table里的随机一个td
		let element=e.target;
		if(element.nodeName=="TD" && element.className!='shanchu'){
			let hp=element.innerText;
			element.innerText=null;
		

			let inputtt=document.createElement('input');
			// inputtt.type='text';
			inputtt.value=hp;
			element.appendChild(inputtt);
			// onblur失去焦点
			inputtt.onblur=function(){
				let newv=this.value;
				element.removeChild(inputtt);
				element.innerText=newv;
				inputtt=null;
				if(newv){
					element.innerText=newv;
				}else{
					element.innerText=hp;
				}
			}
		}else if(element.nodeName=='BUTTON'){
			// 由删除按键，寻找父元素，一级一级找tr标签
			let trs=element.parentNode.parentNode;
			table.removeChild(trs);
		}
	
	}

// 添加	
	let tianjia=document.querySelector('.tianjia');
	tianjia.ondblclick=function(){
		let trrt=document.createElement('tr');
		let kong=[{name:'',xb:'',jg:'',phong:'',nowzhuzhi:''},]
		kong.forEach(element=>{
			zhixing(element);
		});
	}



}