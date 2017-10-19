window.addEventListener('load',function(){
    let dl = document.querySelector('dl');
    let inputs = document.querySelector('input');
    let aside =document.querySelector('.aside');
    let tops = document.querySelector('.top');

    let info = [
        {name:"黄博伟",tell:"18435119831",py:"huangbowei"},
        {name:"杜小晒",tell:"18203559074",py:"duxiaoshai"},
        {name:"师亦豪",tell:"13753180299",py:"shiyihao"},
        {name:"胡梅",tell:"18435119839",py:"humei"},
        {name:"张丹颖",tell:"18435119838",py:"zhangdanying"},
        {name:"许壮壮",tell:"18435119837",py:"xuzhuangzhuang"},
        {name:"曹瑞芳",tell:"18435119836",py:"caoruifang"},
        {name:"宋浩",tell:"18435119835",py:"songhao"},
        {name:"苏凡",tell:"18435119834",py:"sufan"},
        {name:"陈保铭",tell:"18435119833",py:"chabaoming"},
        {name:"常亚斌",tell:"18435119832",py:"changyabin"},
        {name:"郭小勇",tell:"18435114377",py:"guoxiaoyong"}
    ]
    inputs.onkeyup = function(){
        let value = this.value.trim();
        let date = info.filter(function (element) {
            return element.py.includes(value) || element.name.includes(value) || element.tell.includes(value);
        })
        rener(date)
    }
    rener(info);
    let dt =document.querySelectorAll('dt')
    let arr = [];
    let hs =document.querySelector('header').offsetHeight;
    dt.forEach(element=>{
        arr.push(element.offsetTop);

    });
    window.onscroll=function(){
        let ws=document.body.scrollTop;
        console.log(ws);
        arr.forEach((element,index)=>{
            if(ws+hs>=element){
                tops.innerText=dt[index].innerText;

            }
        })
        if(ws>0){
            tops.style.opacity=1;
        }else {
            tops.style.opacity=0;
        }


    }


    function rener(data){
        dl.innerHTML='';
        aside.innerHTML='';
        let obj={};
        data.forEach(function (element){

            let first =element.py.charAt(0).toUpperCase();
            if(!obj[first]){
                obj[first]=[];
            }
            obj[first].push(element);
            
        })
        let char = Object.keys(obj).sort();
        char.forEach(element=>{
            dl.innerHTML+=`
            <dt>${element}</dt>
            `
            obj[element].forEach(index=>{
                dl.innerHTML+=`
                <dd><a href="tel:${index.tell}">${index.name}</a></dd>
                `
            })
        })
        let char1 =Object.keys(obj).sort();
        char1.forEach(value=>{
             aside.innerHTML+=`<li>${value}</li>`
        }) 
        aside.style.marginTop=`${-aside.offsetHeight/2}px`
    }

})