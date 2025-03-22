let newmoney1=0
let newmoney2=0
let newmoney3=0
let k=1
let x=0
a=1
// 初始设置


images=[
    "url('./data/pictures/background1.jpg')",
    "url('./data/pictures/IMG_0106.JPG')",
    "url('./data/pictures/background3.jpg')",
    "url('./data/pictures/IMG_0129.JPG')",
    "url('./data/pictures/IMG_0300.JPG')",
    "url('./data/pictures/background6.jpg')",
    "url('./data/pictures/background7.jpg')",
    "url('./data/pictures/background8.jpg')",
    "url('./data/pictures/background9.jpg')",
    "url('./data/pictures/background10.jpg')"
]
// 背景来源


var p1m1 = document.getElementById('p1/-1')
var p1p1 = document.getElementById('p1/+1')
var p1m2 = document.getElementById('p1/-2')
var p1m5 = document.getElementById('p1/-5')
var p1m10 = document.getElementById('p1/-10')
var p1m32 = document.getElementById('p1/-32')
var p1p32 = document.getElementById('p1/+32')
var charge1 = document.getElementById('p1/charge')
var nm1=document.getElementById('money1')
var p2m1 = document.getElementById('p2/-1')
var p2p1 = document.getElementById('p2/+1')
var p2m2 = document.getElementById('p2/-2')
var p2m5 = document.getElementById('p2/-5')
var p2m10 = document.getElementById('p2/-10')
var p2m32 = document.getElementById('p2/-32')
var p2p32 = document.getElementById('p2/+32')
var charge2 = document.getElementById('p2/charge')
var nm2=document.getElementById('money2')
var p3m1 = document.getElementById('p3/-1')
var p3p1 = document.getElementById('p3/+1')
var p3m2 = document.getElementById('p3/-2')
var p3m5 = document.getElementById('p3/-5')
var p3m10 = document.getElementById('p3/-10')
var p3m32 = document.getElementById('p3/-32')
var p3p32 = document.getElementById('p3/+32')
var charge3 = document.getElementById('p3/charge')
var nm3=document.getElementById('money3')
var question=document.getElementById('question')
var per1=document.getElementById('per1')
var per2=document.getElementById('per2')
var per3=document.getElementById('per3')
var per4=document.getElementById('per4')
var per5=document.getElementById('per5')
var per6=document.getElementById('per6')
var dataclear=document.getElementById('dataclear')
var changebg=document.getElementById('changebg')
var body=document.getElementById("bg")
var bomb=document.getElementById('bomb')
// 获取元素


function getdata(){
    judge=localStorage.getItem('judge')
    if (judge>=1){
        newmoney1=Number(localStorage.getItem('newmoney1'))
        newmoney2=Number(localStorage.getItem('newmoney2'))
        newmoney3=Number(localStorage.getItem('newmoney3'))
        k=localStorage.getItem('k')
        nm3.innerHTML=newmoney3/k
        nm2.innerHTML=newmoney2/k
        nm1.innerHTML=newmoney1/k
        per1.style.backgroundColor=localStorage.getItem('per1')
        per2.style.backgroundColor=localStorage.getItem('per2')
        per3.style.backgroundColor=localStorage.getItem('per3')
        per4.style.backgroundColor=localStorage.getItem('per4')
        per5.style.backgroundColor=localStorage.getItem('per5')
        per6.style.backgroundColor=localStorage.getItem('per6')
        question.innerHTML=localStorage.getItem('question')
        bomb.innerHTML=localStorage.getItem('bomb')
        a=Number(localStorage.getItem('a'))
        x=Number(localStorage.getItem('x'))
        body.style.backgroundImage=images[x]
    }
}
getdata()

function setdata(){
    localStorage.clear()
    localStorage.setItem('newmoney3',newmoney3)
    localStorage.setItem('newmoney2',newmoney2)
    localStorage.setItem('newmoney1',newmoney1)
    localStorage.setItem('k',k)
    localStorage.setItem('per1',per1.style.backgroundColor)
    localStorage.setItem('per2',per2.style.backgroundColor)
    localStorage.setItem('per3',per3.style.backgroundColor)
    localStorage.setItem('per4',per4.style.backgroundColor)
    localStorage.setItem('per5',per5.style.backgroundColor)
    localStorage.setItem('per6',per6.style.backgroundColor)
    localStorage.setItem("question",question.innerHTML)
    localStorage.setItem('x',x)
    localStorage.setItem('a',a)
    localStorage.setItem("bomb",bomb.innerHTML)
    judge=1
    localStorage.setItem('judge',judge)
} 
// 定义数据储存读取

per1.onclick=function(){
    k=10
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per1.style.backgroundColor='red'
    per2.style.backgroundColor='cyan'
    per3.style.backgroundColor='cyan'
    per4.style.backgroundColor='cyan'
    per5.style.backgroundColor='cyan'
    per6.style.backgroundColor='cyan'
    question.innerHTML='0.1元/张（点击按钮修改）'
    setdata()
}
per2.onclick=function(){
    k=5
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per2.style.backgroundColor='red'
    per1.style.backgroundColor='cyan'
    per3.style.backgroundColor='cyan'
    per4.style.backgroundColor='cyan'
    per5.style.backgroundColor='cyan'
    per6.style.backgroundColor='cyan'
    question.innerHTML='0.2元/张（点击按钮修改）'
    setdata()
}
per3.onclick=function(){
    k=2
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per3.style.backgroundColor='red'
    per2.style.backgroundColor='cyan'
    per1.style.backgroundColor='cyan'
    per4.style.backgroundColor='cyan'
    per5.style.backgroundColor='cyan'
    per6.style.backgroundColor='cyan'
    question.innerHTML='0.5元/张（点击按钮修改）'
    setdata()
} 
per4.onclick=function(){
    k=1
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per4.style.backgroundColor='red'
    per2.style.backgroundColor='cyan'
    per3.style.backgroundColor='cyan'
    per1.style.backgroundColor='cyan'
    per5.style.backgroundColor='cyan'
    per6.style.backgroundColor='cyan'
    question.innerHTML='1元/张（点击按钮修改）'
    setdata()
}
per5.onclick=function(){
    k=0.5
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per5.style.backgroundColor='red'
    per2.style.backgroundColor='cyan'
    per3.style.backgroundColor='cyan'
    per4.style.backgroundColor='cyan'
    per1.style.backgroundColor='cyan'
    per6.style.backgroundColor='cyan'
    question.innerHTML='2元/张（点击按钮修改）'
    setdata()
}
per6.onclick=function(){
    k=0.2
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per6.style.backgroundColor='red'
    per2.style.backgroundColor='cyan'
    per3.style.backgroundColor='cyan'
    per4.style.backgroundColor='cyan'
    per1.style.backgroundColor='cyan'
    per5.style.backgroundColor='cyan'
    question.innerHTML='5元/张（点击按钮修改）'
    setdata()
}
p1m1.onclick= function(){
    newmoney1-=1*a
    nm1.innerHTML=newmoney1/k            
}
p1p1.onclick= function(){
    newmoney1+=1*a
    nm1.innerHTML=newmoney1/k            
}
p1m2.onclick= function(){
    newmoney1-=2*a
    nm1.innerHTML=newmoney1/k            
}
p1m5.onclick= function(){
    newmoney1-=5*a
    nm1.innerHTML=newmoney1/k            
}
p1m10.onclick= function(){
    newmoney1-=10*a
    nm1.innerHTML=newmoney1/k            
}
p1m32.onclick= function(){
    newmoney1-=32*a
    nm1.innerHTML=newmoney1/k            
}
p1p32.onclick= function(){
    newmoney1+=32*a
    nm1.innerHTML=newmoney1/k            
}
charge1.onclick= function(){
    newmoney1=-newmoney2-newmoney3
    nm1.innerHTML=newmoney1/k
    a=1
    bomb.innerText='BOMB'
    setdata()           
}
p2m1.onclick= function(){
    newmoney2-=1*a
    nm2.innerHTML=newmoney2/k            
}
p2p1.onclick= function(){
    newmoney2+=1*a
    nm2.innerHTML=newmoney2/k            
}
p2m2.onclick= function(){
    newmoney2-=2*a
    nm2.innerHTML=newmoney2/k           
}
p2m5.onclick= function(){
    newmoney2-=5*a
    nm2.innerHTML=newmoney2/k            
}
p2m10.onclick= function(){
    newmoney2-=10*a
    nm2.innerHTML=newmoney2/k           
}
p2m32.onclick= function(){
    newmoney2-=32*a
    nm2.innerHTML=newmoney2/k           
}
p2p32.onclick= function(){
    newmoney2+=32*a
    nm2.innerHTML=newmoney2/k          
}
charge2.onclick= function(){
    newmoney2=-newmoney1-newmoney3
    nm2.innerHTML=newmoney2/k 
    a=1
    bomb.innerText='BOMB'
    setdata()          
}
p3m1.onclick= function(){
    newmoney3-=1*a
    nm3.innerHTML=newmoney3/k            
}
p3p1.onclick= function(){
    newmoney3 +=1*a
    nm3.innerHTML=newmoney3/k           
}
p3m2.onclick= function(){
    newmoney3-=2*a
    nm3.innerHTML=newmoney3/k          
}
p3m5.onclick= function(){
    newmoney3-=5*a
    nm3.innerHTML=newmoney3/k            
}
p3m10.onclick= function(){
    newmoney3-=10*a
    nm3.innerHTML=newmoney3/k           
}
p3m32.onclick= function(){
    newmoney3-=32*a
    nm3.innerHTML=newmoney3/k           
}
p3p32.onclick= function(){
    newmoney3+=32*a
    nm3.innerHTML=newmoney3/k           
}
charge3.onclick= function(){
    newmoney3=-newmoney1-newmoney2
    nm3.innerHTML=newmoney3/k   
    a=1
    bomb.innerText='BOMB'
    setdata()        
}

// 计算

dataclear.onclick=function(){
    localStorage.clear()
    judge=0
    question.innerHTML='1元/张（点击按钮修改）'
    localStorage.setItem('judge',judge)
    newmoney1=0
    newmoney2=0
    newmoney3=0
    k=1
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per4.style.backgroundColor='red'
    per2.style.backgroundColor='cyan'
    per3.style.backgroundColor='cyan'
    per6.style.backgroundColor='cyan'
    per1.style.backgroundColor='cyan'
    per5.style.backgroundColor='cyan' 
    x=0 
    body.style.backgroundImage=images[x]
    a=1
    bomb.innerText='BOMB' 
}

changebg.onclick=function(){
    if(x>8){
        x=0
    }else{
        x+=1
    }
    body.style.backgroundImage=images[x]
    setdata()
}
bomb.onclick=function(){
    a+=1
    bomb.innerText='翻'+a+'倍'
    setdata()
}