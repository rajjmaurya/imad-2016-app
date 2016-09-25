console.log('Loaded!');
//change the text of
var element=document.getElementById("main-text");
element.innerHTML="new value";
var img=document.getElementById("madi");
img.onclick = function (){
    
    var interval = setInterval(moveRight,100);
};