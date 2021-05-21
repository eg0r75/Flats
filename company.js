let card=document.getElementsByClassName("teammate")[0];
let img=card.children[0];
card.onmousemove=function(event){
    img.style.transition="0s"
console.log((event.clientX-card.offsetLeft)+" : "+(event.clientY-card.offsetTop));
img.style.transform="rotate("+(event.clientX-card.offsetLeft)+"deg)"
}
card.onmouseout=function (event){
    img.style.transition="1s"
    img.style.transform="rotate(0)"
}