const start=document.querySelector("#start");
const stop=document.querySelector("#stop");
const div=document.querySelector(".color-gen");

const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]//to get color from 0 to 16
    }
    return color;
}
console.log(randomColor())
let intervalId;
const startChangeColor=function(){
    if(!intervalId){//safe coding przctice
        intervalId=setInterval(changebgColor,1000);
    }

    function changebgColor(){
        div.style.backgroundColor=randomColor();
    }
    
}
const stopChangeColor=function(){
clearInterval(intervalId);
intervalId=null;//empty interval id safe coding practice to claer memory
}

start.addEventListener("click",startChangeColor)

stop.addEventListener("click",stopChangeColor)
